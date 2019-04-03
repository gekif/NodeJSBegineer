/*

// Create Schema For The Database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals', {useMongoClient: true});
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log('could bot connect', err);
    });
*/


const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {

    // Check if it is error when connected to the database
    if (err) throw err;
    const object = new ObjectID();
    console.log(object);

    console.log('CONNECTED');

    // Create Data
    const db = client.db('animals');

    // Inserting Data
    /*db.collection('mammals').insertOne({
        name: 'Nunung',
        leg: 3
    }, (err, result) => {
        if (err) {
            return console.log(err);
        }

        // Check if the data is inserted
        console.log('INSERTED');
    });*/



    // Fetching Data
    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result)
    })
});
