const { argv } = require('node:process');
let argument1 = parseInt(argv[2]);
let argument2 = parseInt(argv[3]);

if (isNaN(argument1) || isNaN(argument2)) {
    console.log("NaN");
}
else {
   // let sum = argument1 + argument2;
    console.log(add(argument1, argument2));
}   

function add(a, b) {
    return a + b;
}