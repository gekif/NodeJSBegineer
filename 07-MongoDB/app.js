/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log('could bot connect', err);
    });
*/


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {

    // Check if it is error when connected to the database
    if (err) throw err;
    console.log('CONNECTED');

    // Create Data
    const db = client.db('animals');

    // Create function
    db.collection('mammals').insertOne({
        name: 'horse'
    }, (err, result) => {
        if (err) {
            return console.log(err);
        }

        // Check if the data is inserted
        console.log('INSERTED');
    });




    /*db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })*/
});
