var CPU = require("./cpu.js");

console.log(CPU);
CPU.exec(0x04, "r0", 66);
console.log(CPU);
