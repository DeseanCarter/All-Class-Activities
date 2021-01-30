// TODO: What are we importing?
//Node library package for reading and writing files
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// appending data to file or creating the file.
// options object
// callback function
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // a condition followed by a question mark
  err ? console.error(err) : console.log('Commit logged!')
);
