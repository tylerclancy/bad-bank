const express = require('express');
const app = express();
const cors = require('cors');

// Serve static content
app.use(express.static('public'));
app.use(cors());

app.get('/account/create/:name/:email/:password', (req, res) => {
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password
  });
});
