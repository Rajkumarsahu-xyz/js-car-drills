// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


const invent = require("./inventory");

function problem3(invent){

  invent.sort((a, b) => {
      const modelA = a.car_model.toLowerCase(); 
      const modelB = b.car_model.toLowerCase();
    
      if (modelA < modelB) {
        return -1;
      }
      if (modelA > modelB) {
        return 1;
      }
      return 0;
    });
  
  console.log(invent)
}

module.exports = {problem3}