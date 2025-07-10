// Require the db connection 
const mysql = require('mysql2')
// Establish a db connection
const credentials = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: '146_db_pizzas'
}
const connection = mysql.createConnection(credentials)

//console.log(connection);

connection.connect(err =>{
  if(err) {
    throw err
  } 
  console.info('✅ Connection successfull');
  
})


module.exports = connection