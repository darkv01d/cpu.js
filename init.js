var CPU = require("./libs/cpu.js");
var FileHandler = require("./libs/handler.js");
var c = new CPU();
var handler;
if (process.argv[2] == undefined) {
	//handler = new FileHandler(process.argv[2]);
	console.log("No file specified");
	console.log("USAGE: " + process.argv[1] + " <File>");
	process.exit(1);
} else {
	handler = new FileHandler(c);
	handler.loadFile(process.argv[2]);
//	console.log(handler.registers);
//	handler.execute();
//	console.log(handler.registers);
	handler.saveFile();
}

//console.log(c);
//c.exec(0x04, "r0", 66);
//console.log(c);
