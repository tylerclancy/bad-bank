const express = require('express');
const app = express();
const cors = require('cors');

// Serve static content
app.use(express.static('public'));
app.use(cors());

// Create account
app.get('/account/create/:name/:email/:password', (req, res) => {
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password
  });
});

// Login user
app.get('/account/login/:email/:password', (req, res) => {
  res.send({
    email: req.params.email,
    password: req.params.password
  });
});

// All accounts
app.get('/account/all', (req, res) => {
  res.send({
    name: 'tyler',
    email: 'tyler@gmail.com',
    password: 'secret'
  });
});

// Listener
app.listen(4000, () => {
  console.log('Running on port 4000!');
});
