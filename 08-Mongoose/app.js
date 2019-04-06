// Create Schema For The Database
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/mongoose', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log('could bot connect', err);
    });
