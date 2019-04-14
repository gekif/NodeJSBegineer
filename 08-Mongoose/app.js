// Create Schema For The Database
const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const app = express();


// Add Promises
mongoose.Promise = global.Promise;


// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/mongoose', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log('could bot connect', err);
    }
);


// Express Route
app.get('/', (req, res) => {
    res.send("ROOT");
});


app.post('/users', (req, res) => {

    // Inserting Data
    const newUser = new User({
        firstName: 'Regitha',
        lastName: 'Cahyani',
        isActive: 1
    });


    // Saving Data Method Using Promises
    newUser.save().then(savedUser => {
        console.log('saved user');
        res.send('USER SAVED');
    });


});





const port = 4444 || process.env.PORT;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
