const getPersonObject = require('./names');
const getHobbies = require('./hobbies');

/* 

Lavoriamo con i moduli commonjs esportando e importando valori e funzioni.


Segui questi tre step creando i rispettivi files:

1 - names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.

2 - hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file.


3 - people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js


Crea una funzione che non ha parametri. 
La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.


*/

console.log(getPersonObject('Umberto', 'Carbone'))

function getPersonWithHobbies(){
  
  // call the functions
  const {firstName, lastName} = getPersonObject('Umberto', 'Carbone')
  const hobbies = getHobbies('Coding', 'Coding', 'Coding')

  // prepare the return object
  return {
    fullname: firstName + ' ' + lastName,
    hobbies
  }
}


const personObj = getPersonWithHobbies()

console.log(personObj);
