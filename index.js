// main file
const parseMD = require('./helpers/parseMD');
const fs = require('fs');

const runIndex = () => {
  const originalMDDirectory = './markdown/';
  const JSDirectory = './javascript/';

  const originalMDFiles = []; // all the filenames from /markdown
  const originalJSFiles = []; // all the filenames from /javascript

  fs.readdirSync(originalMDDirectory).forEach((file) => {
    originalMDFiles.push(file);
    //console.log(file);
  });

  fs.readdirSync(JSDirectory).forEach((file) => {
    originalJSFiles.push(file);
    //console.log(file);
  });

  // for each MD file, parse it and plug in JS if needed
  for (let i = 0; i < originalMDFiles.length; i++) {
    parseMD(originalMDFiles[i], originalJSFiles);
  }
};

runIndex();
