"use strict";
module.exports = class Literals {
	constructor() {
	this.op = new Array();
	this.op["add"] = 0x00;
	this.op["and"] = 0x01;
	this.op["call"] = 0x02;
	this.op["cmp"] = 0x03;
	this.op["cnst"] = 0x04;
	this.op["ctrl"] = 0x05;
	this.op["div"] = 0x06;
	this.op["epm"] = 0x07;
	this.op["hlt"] = 0x08;
	this.op["insp"] = 0x09;
	this.op["int"] = 0x0A;
	this.op["jmpeq"] = 0x0B;
	this.op["jmpge"] = 0x0C;
	this.op["jmpnge"] = 0x0D;
	this.op["jmpsml"] = 0x0E;
	this.op["load"] = 0x0F;
	this.op["mov"] =  0x10;
	this.op["mul"] = 0x11;
	this.op["nop"] = 0x12;
	this.op["not"] = 0x13;
	this.op["or"] = 0x14;
	this.op["pload"] = 0x15;
	this.op["pop"] = 0x16;
	this.op["pstore"] = 0x17;
	this.op["push"] = 0x18;
	this.op["ret"] = 0x19;
	this.op["store"] = 0x1A;
	this.op["sub"] = 0x1A;
	this.op["xor"] = 0x1B;
	}
}
