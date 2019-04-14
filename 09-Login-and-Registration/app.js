
// Require Declaration
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');



// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Create Mongoose Connection
// First Method
/*
mongoose.connect('mongodb://127.0.0.1/login', { useMongoClient: true },() => {
    console.log('connected');
});
*/

// Second Method
mongoose.connect('mongodb://localhost:27017/login', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
            console.log('could not connect', err);
        }
    );



// Post Request
app.post('/register', (req, res) => {

    // Create User
    const newUser = new User();


    // Set Value Using Body Parser
    newUser.email = req.body.email;
    newUser.password = req.body.password;


    // Saving User
    newUser.save().then(userSaved => {
        res.send(`USER WITH EMAIL: ${userSaved.email} SAVE SUCCESSFULLY`);

    // Catch Error When Saving
    }).catch(err => {
        res.send('User cannot be save because: ' + err);
    });


    // For Show What is send (cant be commented)
    // res.send(newUser);


});



// Make Port
app.listen(4111, () => {
    console.log('Listening on port 4111');
});