
// Require Declaration

// Setting Up Express
const express = require('express');
const app = express();

// Setting Up Mongoose
const mongoose = require('mongoose');

// Setting Up Body Parser
const bodyParser = require('body-parser');

// Setting Up User
const User = require('./models/User');

// Settubg Up Bcrypt
const bcrypt = require('bcryptjs');



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


    // Adding Bcrypt
    bcrypt.genSalt(10, (err, salt) => {

        //Hashing
        bcrypt.hash(newUser.password, salt, (err, hash) => {

            // Throw error if hashing password fail
            if(err) return err;

            // Hashing the password
            newUser.password = hash;

            // Saving User
            newUser.save().then(userSaved => {
                res.send(`USER WITH EMAIL: ${userSaved.email} SAVE SUCCESSFULLY`);

                // Catch Error When Saving
            }).catch(err => {
                res.send('User cannot be save because: ' + err);
            });

        })

    });


    // For Show What is send (cant be commented)
    // res.send(newUser);


});



// Make Port
app.listen(4111, () => {
    console.log('Listening on port 4111');
});