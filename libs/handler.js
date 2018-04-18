"use strict";
var CPU = require("./cpu.js");
var Literals = require("./literals.js");
var fs = require("fs");
//var c = new CPU();

module.exports = class FileHandler {
	/*execute() {
		console.log(this.it);
		/ for (var i = 0; i < this.instructions.length; i++) {
			this.registers.exec(this.instructions[i]);
		} /
	 } */

	loadFile(filepath) {
		fs.readFile(filepath, "utf8", this.storeData);
	}

	storeData(err, data) {
		if (err) {
				return console.log(err);
		}
		//TODO create file class
		var tmp = data.toString().split("\n"); //Seperate lines in array
		var junk = new Array();
		for (var i=0; i<tmp.length; i++) {
			if (tmp[i].search(";") != -1) {
				junk[i] = tmp[i].slice(0, tmp[i].search(";")).toString(); //remove comments
			} else {
				junk[i] = tmp[i];
			}
		}
		var cleared = junk.filter(word => word.length >= 1); //cut empty lines
		console.log(cleared)
		var spliced = new Array();
		for (var i = 0; i < cleared.length; i++) {
			spliced[i] = new Array(cleared[i].slice(0,cleared[i].search(" ")), cleared[i].slice(cleared[i].search(" ")), cleared[i].slice(cleared[i].search(", "), cleared[i].slice(" ", cleared[i].length)));
		}
		console.log(spliced);
		//replace literals
		for (i = 0; i < cleared.length; i++) {
			
		}
	}

	saveFile() {
		console.log(FileHandler.it);
		fs.writeFile("convert", FileHandler.it, function(err) {
 			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	}

constructor(c) {
		this.literals = new Literals();
		this.buffer;
		this.registers = c;
	}
}
//var handler = new FileHandler();
//handler.loadFile(process.argv[2], handler.execute);
