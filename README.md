 # CPU.js

## Syntax

	* 0x00 = add rA, rB, rC
	* 0x01 = and rA, rB, rC
	* 0x02 = call rA
	* 0x03 = cmp rA, rB, rC
	* 0x04 = cnst rA, Constant
	* 0x05 = ctrl specialRegister rA
	* 0x06 = div rA, rB, rC
	* 0x07 = epm rA
	* 0x08 = hlt
	* 0x09 = insp rA, specialRegister
	* 0x0A = int rA -- broken
	* 0x0B = jmpeq rA, rB
	* 0x0C = jmpge rA, rB
	* 0x0D = jmpneq rA, rB
	* 0x0E = jmpsml rA, rB
	* 0x0F = load rA, rB
	* 0x10 = mov rA, rB
	* 0x11 = mul rA, rB, rC
	* 0x12 = nop 
	* 0x13 = not rA, rB
	* 0x14 = or rA, rB
	* 0x15 = pload rA, rB -- broken
	* 0x16 = pop rA
	* 0x17 = pstore rA, rB -- broken
	* 0x18 = push rA
	* 0x19 = ret rA
	* 0x1A = store rA, rB -- broken
	* 0x1B = sub rA, rB, rC
	* 0x1C = xor rA, rB, rC

## Usage:
nodejs unit <PATH/TO/EXECUTABLE>
