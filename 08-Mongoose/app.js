// Create Schema For The Database
const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



// Body Parser Used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isActive: req.body.isActive
    });


    // Saving Data Method Using Promises
    newUser.save().then(savedUser => {

        // Save User
        res.send('USER SAVED');

        // Catch Error
    }).catch(err => {
        res.status(404).send('USER NOT SAVE BECAUSE ....');
    });


});



// Fetch Data
app.get('/users', (req, res) => {

    // Find All Data
    User.find({}).then(users => {
        res.send(users);

    // Catch Error
    }).catch(err => {
            res.status(200).send('USER CANT FIND BECAUSE ....');
    });


});



// Patch Data
/*app.patch('/users/:id', (req, res) => {

    // Declaration
    const id = req.params.id;
    const firstName = req.body.firstName;

    // Find The ID and Update it
    User.findByIdAndUpdate(id, { $set: { firstName: firstName }}, { new: true })

    // After Find, Save it
        .then(savedUser => {
            res.send('USER SAVED BY PATCH AGAIN');
        });


});*/



// Put Data
// First Method
/*app.put('/users/:id', (req, res) => {

    // Declaration
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // Find The ID and Update it
    User.findByIdAndUpdate(id, {
        $set: {
            firstName: firstName,
            lastName: lastName
        }}, { new: true })

    // After Find, Save it
        .then(savedUser => {
            res.send('USER SAVED BY PUT');
        });


});*/


// Put Data
// First Method
app.put('/users/:id', (req, res) => {

    // Find The ID and Update it
    User.findOne({_id: req.params.id})

    // After Find, Define it
        .then(user => {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;

    // After define save it
            user.save().then(userSaved => {
                res.send(userSaved);

    // Catch The Error If Failed
            }).catch(err => {
                console.log(err);
            });
        });


});



// Port Connection
const port = 4444 || process.env.PORT;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
