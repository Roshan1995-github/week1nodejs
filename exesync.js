var fs = require("fs");

console.log("Begin readin file!");

var data = fs.readFileSync("input2.txt");
console.log(data.toString());
console.log("End reading file!");

console.log("Begin appending file!");
fs.appendFileSync("input2.txt", "Append Something!");
console.log("End appending file!")

console.log("Begin re-reading file!");
var data = fs.readFileSync("input2.txt");
console.log(data.toString());
console.log("End re-reading file!")