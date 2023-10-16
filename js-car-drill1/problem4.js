// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const invent = require("/home/raj/js-car-drills/js-car-drill1/inventory.js");


function problem4(invent){
    let years = [];

    for(let i = 0; i < invent.length; i++){
        years.push(invent[i].car_year);
    }

    return years;
}

module.exports = problem4;