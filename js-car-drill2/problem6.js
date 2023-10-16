// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  
// Execute a function and return an array that only contains BMW and Audi cars.  
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const invent = require("./inventory");

function problem6(invent){
    const BMW_Audi = invent.filter(cars => cars.car_make == "BMW" || cars.car_make == "Audi")

    console.log(JSON.stringify(BMW_Audi));
}


module.exports = { problem6 };