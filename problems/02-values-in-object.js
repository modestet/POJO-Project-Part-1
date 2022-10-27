/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:
***********************************************************************/

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]


function valuesInObject(obj) {
  // Your code here
  // return Object.values(obj);
  let array = [];
  for(let key in obj){
    let value = obj[key];
    array.push(value);
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
