const express = require('express');
const path = require('path');

const groceries = require('./controllers/groceries.js');

const db = require('./db/connection.js');

const app = express();
const PORT = 3000;

// Decide on the directory
const publicDirectory = path.join(__dirname, '../client/dist');

// Implement middlware with use method
app.use(express.static(publicDirectory));

// Get request to the groceries
app.get('/groceries', groceries.get);

// Run express static
app.listen(PORT);