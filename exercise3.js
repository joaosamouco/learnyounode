
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var listOfLines = string.split('\n');

console.log(listOfLines.length - 1);
