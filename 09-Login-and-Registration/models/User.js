
// Define Const
const mongoose = require('mongoose');



// Define Schema
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    // List of Field
    email: {
        type: String,
        unique: true,
        trim: true,
        minLength: 3,
        required: true
    },

    password: {
        type: String,
        required: true,
        minLength: 5
    }


});



// Export Model
module.exports = mongoose.model('users', UserSchema);