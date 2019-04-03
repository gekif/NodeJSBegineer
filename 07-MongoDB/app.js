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


const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {

    // Check if it is error when connected to the database
    if (err) throw err;
    // const object = new ObjectID();
    // console.log(object);

    console.log('CONNECTED');

    // Defining Database
    const db = client.db('animals');
    const collect = 'mammals';


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
    /* db.collection('mammals').find().toArray(function (err, result) {
         if (err) throw err;

         console.log(result)
     })*/


    // Updating Data
    /*db.collection('mammals').findOneAndUpdate({
            _id: new ObjectId('5ca4bb951ed2e4308cb1ea12')
        },
        {
            $set:
                {
                    name: 'setiaps'
                }
        })

        // This function will log the previous data before it's updated
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });*/


    // Deleting Data

    //Example
/*    db.collection('mammals').deleteMany({name: 'setiaps'});
    db.collection('mammals').deleteOne({name: 'setiaps'});
    db.collection('mammals').deleteAndFind({name: 'setiaps'});*/

    // Operation
    db.collection(collect).findOneAndDelete({
        _id: new ObjectId('5ca4c20015e60d2a8025e892')
    }).then(result => {
        console.log(result);
    });

});
