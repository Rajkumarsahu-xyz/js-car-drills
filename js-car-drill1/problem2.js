// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

const invent = require("/home/raj/js-car-drills/js-car-drill1/inventory.js");

function problem2(invent) {
    let size = invent.length;
    console.log(`"Last car is a ${invent[size-1].car_make} ${invent[size-1].car_model}`);
}

module.exports = problem2;