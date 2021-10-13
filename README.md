# Markdown Parser

This application will parse any Markdown files in the `/markdown` directory and plug in chunks of code from the `/javascript` directory. New Markdown files are then generated in `/markdown-formatted`

### helpers

Contains JS to make the application work

### javascript

Our source JS. Each file contains a chunk of code that belongs in a specific spot in a given markdown page. File names correspond with the line in the Markdown document where its used.

### markdown

The original, unparsed markdown files. type out the file name of the JS that needs to be plugged into the document, like `someFileName.js`. Be sure to include the file extension.

### markdown-formatted

Updated markdown files with JS code plugged in.
