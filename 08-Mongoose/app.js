// Create Schema For The Database
const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const app = express();


// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/mongoose', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log('could bot connect', err);
    }
);


app.get('/', (req, res) => {
    res.send("ROOT");
});

app.post('/users', (req, res) => {

});


// Inserting Data
const newUser = new User({
    firstName: 'Regitha',
    lastName: 'Cahyani',
    isActive: 1
});


// Saving Data Method
/*newUser.save((err, dataSaved) =>  {
    if (err) return err;

    console.log(dataSaved);
});*/


const port = 4444 || process.env.PORT;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
