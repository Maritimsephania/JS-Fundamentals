const {argv} = require('node:process');
let argument2 = parseInt(argv[2]);

if (isNaN(argument2)) {
    console.log("Not a number");
}   else {
    console.log("My number: " + argument2);
  
}