console.log('Hi Fabio!');
import axios from 'axios'
//const axios = require('axios');


// make a get request ollama api endpoint /api/tags
axios.get('http://localhost:11434/api/tags')
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error fetching tags:', error);
});

// server.mjs
/* import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World 3!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
}); */

// run with `node server.mjs`
