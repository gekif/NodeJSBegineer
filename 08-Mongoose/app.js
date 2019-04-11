// Create Schema For The Database
const mongoose = require('mongoose');
const User = require('./models/User');


// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/mongoose', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log('could bot connect', err);
    }
);


// Inserting Data
const newUser = new User({
    firstName: 'Alien',
    lastName: 'Setiaaa',
    isActive: 1
});


// Saving Data Method
newUser.save((err, dataSaved) =>  {
    if (err) return err;

    console.log(dataSaved);
});
