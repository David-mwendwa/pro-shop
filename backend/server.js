const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  let id = req.params.id;
  let product = products.filter((product) => product._id === id);
  res.json(...product);
});

app.listen(5000, console.log('server running on port 5000'));
