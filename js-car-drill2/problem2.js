// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

const invent = require("./inventory");

function problem2(invent){
    let size = invent.length;
    
    const filteredItem = invent.filter(item => {
        return item.id == size;
    })

    console.log(`Last car is a ${filteredItem[0].car_make} ${filteredItem[0].car_model}`);
}

module.exports = { problem2 };