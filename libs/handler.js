var CPU = require("./cpu.js");
//var Opcode = require("./opcode");
var fs = require("fs");

class FileHandler {
	execute(data) {
		for (var i = 0; i < data.length; i++) {
			CPU.exec(data[i]);
		} 
	}

	loadFile(filepath, callback) {
		var rawData = fs.readFile(filepath, "utf8", function (err, data) {
			if (err) {
				return console.log(err);
			}
			//TODO create file class
			var it = data.toString().split("\n");
			var instructions = new Array();
			for (var i=0; i<it.length; i++) {
				instructions[i] = it[i].slice(0, it[i].search(";")).toString();
			}
			var instructions = instructions.filter(word => word.length > 1);
			//console.log(instructions);
			callback(instructions);
		});
	}

constructor() {
		this.instructions;
		this.buffer;
		if (process.argv[2] == undefined) {
			console.log("ERROR! No File Specified");
			console.log("USAGE: " + process.argv[1] + " <file>");
			process.exit(1);
		}
	}
}
var handler = new FileHandler();
handler.loadFile(process.argv[2], handler.execute);
