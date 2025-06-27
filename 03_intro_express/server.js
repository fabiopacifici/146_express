const express = require('express');
const app = express();
const port = 3000;

// static assets
app.use(express.static('public'))


app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
})


// Routes (http://localhost:3000/)
app.get('/', (req, res) => {
  //console.log(req);  
  //console.log(res);

  // respond with a string
  //res.send('Hello World!');
  // respond with HTML
  //res.send('<h1>Hello World!</h1>')
  // respond with JSON
  //res.send({name: 'Fabio', age: 30, city: 'Rome'});


  res.type('html').send('<h1> Welcome to my express Server!</h1> <p> This is a simple server built with Express.js</p> <p> You can access the API at <a href="/api/movies">/api/movies</a></p>');

})


app.get('/api/movies', (req, res)=>{

  const movies = [
    { title: 'Inception', year: 2010, director: 'Christopher Nolan' },
    { title: 'The Matrix', year: 1999, director: 'Lana Wachowski, Lilly Wachowski' },
    { title: 'Interstellar', year: 2014, director: 'Christopher Nolan' },
    { title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola' }
  ]

  res.json(movies)


})




app.get('/api/students', (req, res)=>{

  const students = [
    { name: 'Alice', age: 22, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 23, city: 'Chicago' },
    { name: 'David', age: 24, city: 'Houston' }
  ];


  // convert the array into a json string using plain text
  
/*   [
    { "name": "Alice", "age": 22, "city": "New York" },
    { "name": "Bob", "age": 25, "city": "Los Angeles" },
    { "name": "Charlie", "age": 23, "city": "Chicago" },
    { "name": "David", "age": 24, "city": "Houston" }
  ]
 */ 

  res.json(students);

})