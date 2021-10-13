const fs = require('fs');

// takes in original markdown file path, JS filepath
const parseMD = async (markdownFile, JSFilesArray) => {
  console.log('\x1b[36m%s\x1b[0m', `Parsing markdown/${markdownFile}`);

  // an array to hold all the lines in the old file
  let fileLines;

  // array to hold new lines that will be pushed to new md file
  const newFileLines = [];

  // get the data from the original markdown file
  try {
    const data = fs.readFileSync(`markdown/${markdownFile}`, 'utf8');
    fileLines = data.split('\n'); // split the lines out to the fileLines array
    //console.log(fileLines);
  } catch (err) {
    console.error(err);
  }

  // for each line
  for (i = 0; i < fileLines.length; i++) {
    // if line is just a hard return, just push that line to newFileLines array
    if (fileLines[i] === '\r') {
      newFileLines.push(fileLines[i]);
    }

    // otherwise, remove the trailing \r from the line
    const line = fileLines[i].replace(/\r/g, '');

    // if the line matches a JS file in the array of JS files, replace it with the contents of that JS file
    if (JSFilesArray.includes(line)) {
      console.log('\x1b[33m%s\x1b[0m', `Found a JS file match for ${line}`);
      // get the data from the JS file referenced in the markdown file
      try {
        const data = fs.readFileSync(`javascript/${line}`, 'utf8');
        //console.log(data);

        // replace the trigger word with our JS
        const replacedWithJS = line.replace(line, `\`\`\`\n${data}\`\`\``);
        newFileLines.push(replacedWithJS); // push the new line
      } catch (err) {
        console.error(err);
      }
    } else {
      // otherwise just push the line without changing it
      newFileLines.push(line);
    }
  }

  const newMDString = newFileLines.join(''); // join the lines back together into one string

  // make a new file with the updated string
  try {
    const data = fs.writeFileSync(`markdown-formatted/${markdownFile}`, newMDString);
    //file written successfully
  } catch (err) {
    console.error(err);
  }
};

module.exports = parseMD;
