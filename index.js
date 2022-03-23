const express = require('express');
const app = express();
const cors = require('cors');

// Serve static content
app.use(express.static('public'));
app.use(cors());
