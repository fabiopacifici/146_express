
/**
 * This function returns an object with first and last name properties.
 * It is used to demonstrate how to create and export a function in CommonJS.
 * @param {String} firstName
 * @param {String} lastName
 * @returns {Object} - An object containing the first and last name.
 */
function getPersonObject(firstName, lastName){
  
  // return the entire object
  return {
    firstName: firstName,
    lastName: lastName
  }
}





module.exports = getPersonObject