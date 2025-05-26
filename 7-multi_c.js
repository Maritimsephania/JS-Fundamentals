const { argv} = require('node:process');
let number_of_times = parseInt(argv[2]);
if (isNaN(number_of_times)) {
    console.log("Missing number of occurrences");

}
else {
    for (let i = 0; i < number_of_times; i++) {
        console.log("C is fun");
    }
}