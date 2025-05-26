const { argv } = require('node:process');
let argument1 = parseInt(argv[2]);
if (isNaN(argument1)) {
    console.log("Missing size");
}
else {
    for (let i = 0; i < argument1; i++) {
        let row = '';
        for (let j = 0; j < argument1; j++) {
            row += 'X';
        }
        console.log(row);
    }
}