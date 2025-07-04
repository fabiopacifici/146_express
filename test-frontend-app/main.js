const endpoint = 'http://localhost:3030/api/pizzas'

fetch(endpoint)
.then(res => res.json())
.then(data =>{
  console.log(data);
  
})