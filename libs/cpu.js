"use strict"
/*
	* 0x00 = "add"
	* 0x01 = "and"
	* 0x02 = "call"
	* 0x03 = "cmp"
	* 0x04 = "cnst"
	* 0x05 = "ctrl"
	* 0x06 = "div"
	* 0x07 = "epm"
	* 0x08 = "hlt"
	* 0x09 = "insp"
	* 0x0A = int
	* 0x0B = jmpeq
	* 0x0C = jmpge
	* 0x0D = jmpneq
	* 0x0E = jmpsml
	* 0x0F = load
	* 0x10 = mov
	* 0x11 = mul
	* 0x12 = nop
	* 0x13 = not
	* 0x14 = or
	* 0x15 = pload
	* 0x16 = pop
	* 0x17 = pstore
	* 0x18 = push
	* 0x19 = ret
	* 0x1A = store
	* 0x1B = sub
	* 0x1C = xor
*/

//Registers
class CPU {
	constructor() {
		this.r = [];
		this.sr = [];
		for (var j=[0, 21]; j[0] <= j[1]; j[0]++) { //j[0] = i; j[1] = a;
			switch (j[0]) {	
				case 16:
					this.sr["base"]=0;
					break;
				case 17:
					this.sr["cr"]=0;
					break;
				case 18:
					this.sr["ip"]=0;
					break;
				case 19:
					this.sr["it"]=2044;
					break;
				case 20:
					this.sr["limit"]=2044;
					break;
				case 21:
					this.sr["sp"]=1024;
					break;
				default:
					var s = "r"+j[0];
					this.r[s]=0;
					break;
			}
		}
	}
	//this.exec(0x04, "r0", 6);
	//wmem(add,val);
	lmem(add) {
		
	}
	
	initialize() {
		this.sr["cr"]=0;
		this.constructor();
	}
	
	overload(op) {
		var gosh;
		gosh = op.toString().split(", ");
		gosh = gosh.toString().split(" ");
		this.exec(gosh);
	}
	
	exec(op, arg1, arg2, arg3) {
		if ((typeof op)=="string") {
			this.overload(op);
		}
		this.sr["cr"]=1;
		/*
		* 0x00 = "add"
		* 0x01 = "and"
		* 0x02 = "call"
		* 0x03 = "cmp"
		* 0x04 = "cnst"
		* 0x05 = "ctrl"
		* 0x06 = "div"
		* 0x07 = "epm"
		* 0x08 = "hlt"
		* 0x09 = "insp"
		* 0x0A = int
		* 0x0B = jmpeq
		* 0x0C = jmpge
		* 0x0D = jmpneq
		* 0x0E = jmpsml
		* 0x0F = load
		* 0x10 = mov
		* 0x11 = mul
		* 0x12 = nop
		* 0x13 = not
		* 0x14 = or
		* 0x15 = pload
		* 0x16 = pop
		* 0x17 = pstore
		* 0x18 = push
		* 0x19 = ret
		* 0x1A = store
		* 0x1B = sub
		* 0x1C = xor
		*/
		switch (op) {
			case 0x00:
			//add rA, rB, rC
				this.r[arguments[1]] = this.r[arguments[2]]+this.r[arguments[3]];
				break;
			case 0x01:
			//and rA, rB, rC
				this.r[arguments[1]]; if(this.r[arguments[2]]==1&&this.r[arguments[3]]==1){return 1;};
				break;
			case 0x02:
			//call rA (Pushes the address of the next instruction, then set's ip to rA)
				this.r["ip"] = this.r[arguments[1]];
				break;
			case 0x03:
			//cmp rA, rB, rC
		this.r[arguments[1]] = (function() {if(this.r[arguments[2]] > this.r[arguments[3]]){return 1;}else if(this.r[arguments[2]]==this.r[arguments[3]]){return 0;} else if (this.r[arguments[2]]<this.r[arguments[3]]){return -1;}});
				break;
			case 0x04:
			//cnst rA, Constant
				this.r[arguments[1]] = arguments[2];
				break;
			case 0x05:
			//ctrl sr, rA
				this.sr[arguments[1]] = this.r[arguments[2]];
				break;
			case 0x06:
			//div rA, rB, rC
				this.r[arguments[1]] = (function () {return this.r[arguments[2]]/this.this.r[arguments[3]]});
				break;
			case 0x07:
			//epm rA
				this.r["cr"] = 1;
				this.r["ip"] = this.r[arguments[1]];
				break;
			case 0x08:
			//hlt
				this.r["cr"] = 0;
				break;
			case 0x09:
			//insp rA, sr
				this.r[arguments[1]] = this.sr[arguments[2]];
				break;
			case 0x0A:
			//int rA -- broken
				//this.
				break;
			case 0x0B:
			//jmpeq rA, rB
				this.sr["ip"]= (function() {if(this.r[arguments[1]]==0) {return this.r[arguments[2]]}else{return;}});
				break;
			case 0x0C:
			//jmpge rA, rB
				this.sr["ip"] = (function() {if(this.r[arguments[1]]==1){return this.r[arguments[2]]}else{return;}});
				break;
			case 0x0D:
			//jmpneq rA, rB
				this.sr["ip"] = (function(){if(this.r[arguments[1]]==0){return this.r[arguments[2]]}else{return;}});
			case 0x0E:
			//jmpsml rA, rB
				if(this.r[arguments[1]]==-1){this.sr["ip"]=this.r[arguments[2]]}else{return;};
				break;
			case 0x0F:
			//load rA, rB
				this.r[arguments[1]] = lmem(arguments[2]);
				break;
			case 0x10:
			//mov rA, rB
				this.r[arguments[2]] = this.r[arguments[1]];
				break;
			case 0x11:
			//mul rA, rB, rC
				this.r[arguments[1]] = (function() {return this.r[arguments[2]]*this.r[arguments[3]]});
				break;
			case 0x12:
			//nop
				break;
			case 0x13:
			//not rA, rB
				this.r[arguments[1]] = (function() {if(this.r[arguments[2]]==0){return 1;}});
				break;
			case 0x14:
			//or rA, rB
				this.r[arguments[1]] = (function(){if(this.r[arguments[2]]!=0 || this.r[arguments[3]]!=0){return 1;}else{return;}});
				break;
			case 0x15:
			//pload rA, rB
				//i dont know yet
				break;
			case 0x16:
			//pop rA
				this.sr["sp"] -=4;
				this.r[arguments[1]]=lmem(this.sr["sp"]);
				break;
			case 0x17:
			//pload rA, rB
			//don't know yet
				break;
			case 0x18:
			//push rA
				//wmem(add,val);
				wmem(this.sr["sp"], this.r[arguments[1]]);
				this.sr["sp"] +=4;
				break;
			case 0x19:
			//ret rA
				this.sr["ip"]=lmem(this.sr["sp"]);
				this.sr["sp"] = this.r[arguments[1]];
				break;
			case 0x1A:
			//store rA, rB
				//wmem(this.r[arguments[1]], this.r[arguments[2]]);
				break;
			case 0x1B:
			//sub rA, rB, rC
				this.r[arguments[1]] = (function(){return this.r[arguments[2]]-this.r[arguments[3]]});
				break;
			case 0x1C:
			//xor rA, rB, rC
				this.r[arguments[1]] = (function(){if((this.r[arguments[2]]==1||this.r[arguments[1]]==1) && (this.r[arguments[2]]==0||this.r[arguments[3]]==0)){return 1;}else{return;}});
				break;	
		}
		this.sr["ip"]++;
	}
}
module.exports = new CPU();
