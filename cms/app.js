// Define the driver
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/cms', {useMongoClient: true}).then(db => {
    console.log("MONGO connected")
}).catch(error => console.log(error));

// Directory of public
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// Load Routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');

// Use Routes
app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);

// Port for website
app.listen(4500, () => {
    console.log(`listening on port 4500`);
});
