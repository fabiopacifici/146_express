const nam = 'Fabio';
const age = 30;


const Person = {
  name: nam,
  age: age,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}


const list = [
  'apple',
  'banana',
  'cherry'
]

const test_string = 'This is a test string';


module.exports = {
  nam,
  age,
  Person,
  test_string,
  list
}

