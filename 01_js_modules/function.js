/**
 * Sums two numbers.
 * @param {Number} a The first number to sum
 * @param {Number} b The second number to sum
 * @returns {Number} The sum of a and b
 */
function sum(a, b) {
  return a + b
}


/**
 * Multiplies two numbers.
 * @param {Number} a The first number to multiply
 * @param {Number} b The second number to multiply
 * @returns {Number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}



function loopOver(arr){
  arr.forEach(element => {
    console.log(element);
  });
}


const list_2 = [
  'apple',
  'banana',
  'cherry'
]

/* for (let i = 0; i < list.length; i++) {
  console.log(list[i]); 
}
 */


// Only export the sum function
// Only one export per module
//module.exports = sum

// Export multiple functions
module.exports = {
  sum,
  loopOver,
  multiply,
  list_2
}