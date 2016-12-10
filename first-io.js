var fs = require('fs');

var pathToFile = process.argv[2];

var file = fs.readFileSync(pathToFile);

var contents = file.toString();

console.log(contents.split('\n').length - 1);
