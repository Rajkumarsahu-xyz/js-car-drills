// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const invent = require("./inventory");
const { problem4 } = require("./problem4")

function noOfCarsOlderThan2000(invent) {
   const yearsArray = problem4(invent)
   let filterYearLess2000 = yearsArray.filter(years => years < 2000);

   console.log(filterYearLess2000.length)
}

function detailsOfCarsOlderThan2000(invent){
   const detailsOfCarsArray = invent.filter(item => item.car_year < 2000);
   console.log(detailsOfCarsArray);
}


module.exports = { noOfCarsOlderThan2000, detailsOfCarsOlderThan2000};