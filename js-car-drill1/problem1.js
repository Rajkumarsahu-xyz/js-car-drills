
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"


const invent = require("/home/raj/js-car-drills/js-car-drill1/inventory.js");

function problem1(invent) {
    for(let i = 0; i < invent.length; i++) {
        if(invent[i].id == 33) {
            console.log(`Car 33 is a ${invent[i].car_year} ${invent[i].car_make} ${invent[i].car_model}`);
            break;
        }
    }
    
}

module.exports = problem1;
