const { argv } = require('node:process');
let index = argv.length;

 if (index <= 2) {
    console.log("No argument");
    } 
    else if (index === 3) {
    console.log("Argument found");
    } else if (index > 3) {
    console.log("Arguments found");
    }

