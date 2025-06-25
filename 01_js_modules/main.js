// Can import a single function from a module
//const sum = require('./function.js')

// can import multiple functions from a module
const {sum, multiply, loopOver, list_2} = require('./function.js');
const {nam, age, Person, test_string, list} = require('./other_elements_to_export.js');


console.log('hi there');

console.log(sum(10, 8));  // Output: 18


const result = multiply(10, 8); // Output: 80
console.log(result); // Output: 80


console.log(nam); // Output: Fabio
console.log(age); // Output: 30
console.log(test_string); // Output: This is a test string
Person.greet(); // Output: Hello, my name is Fabio and I am 30 years old.

console.log(list);
list.forEach(item => {
  console.log(item);
}); // Output: apple, banana, cherry


loopOver(list); // Output: apple, banana, cherry

console.log(list_2); // Output: ['apple', 'banana', 'cherry']

loopOver(list_2); // Output: apple, banana, cherry

