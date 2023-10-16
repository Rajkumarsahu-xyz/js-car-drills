// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const invent = require("/home/raj/js-car-drills/js-car-drill1/inventory.js");
const Question4 = require("./problem4");

function problem5(invent){
    const carYears = Question4(invent)
    const ans = [];

    for(let i = 0; i < carYears.length; i++){
        if(carYears[i] < 2000) {
            ans.push(carYears[i]);
        }
    }

    console.log(ans.length);
    console.log(ans);
}



module.exports = problem5;