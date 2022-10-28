/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  // Your code here
  let word = 'apple'
  let count = 0
  for (key in appleObj) {
    let el = key.toLowerCase()
    console.log(el)
    if (el.includes(word)) {
      count++
    }
    // for (let i = 0; i < appleObj.length; i++) {
    // let el = appleObj[i]
    // console.log(el)
    // if (el in appleObj) {
    // count[el.toLowerCase()]++
    // }
  }
  return count
}

let obj3 = {
  apple: 'red',
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
console.log(appleCounter(obj3))
// console.log(appleCounter(obj3))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
