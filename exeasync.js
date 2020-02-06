var fs = require("fs");

console.log("Begin reading file!");
fs.readFile("input2.txt", function(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("End reading file!");
	console.log("Begin appending file!");
	fs.appendFile("input2.txt", "Append something!", function(err){
		if (err) return err;
		fs.readFile("input2.txt", function(err,data){
			console.log(data.toString())
			console.log("End re-reading file!")	
		})
	console.log("End appending file!");
	console.log("Begin re-reading file!");	
	})
})
