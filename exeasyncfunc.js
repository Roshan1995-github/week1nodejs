var fs = require("fs");

function finishprogram(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("Finish re-reading file!")
}

function rereading(err){
	if (err) return err;
	console.log("Finish appending file!")
	console.log("Begin re-reading file!")
	fs.readFile("input2.txt", finishprogram)
}

function appendFile(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("Finish reading file!");
	console.log("Begind appending file!");
	fs.appendFile("input2.txt", " Append something!", rereading)
}

console.log("Begin reading file!");
fs.readFile("input2.txt", appendFile)