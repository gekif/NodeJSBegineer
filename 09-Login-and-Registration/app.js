
// Require Declaration
const express = require('express');
const app = express();
const mongoose = require('mongoose');




// Create Mongoose Connection
mongoose.connect('mongodb://127.0.0.1/login', { useMongoClient: true },() => {
    console.log('connected');
});



// Make Port
app.listen(4111, () => {
    console.log('Listening on port 4111');
});