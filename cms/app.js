// Define the driver
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const upload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');
const { mongoDbUrl } = require('./config/database');
const passport = require('passport');


// Fix Deprecated Promises
mongoose.Promise = global.Promise;


// Connect to MongoDB using Mongoose
mongoose.connect(mongoDbUrl, {useMongoClient: true}).then(db => {
    console.log("MONGO connected")
}).catch(error => console.log(error));


// Directory of public
app.use(express.static(path.join(__dirname, 'public')));


// Register handlebars helpers
const {select, generateDate, paginate} = require('./helpers/handlebars-helpers');


// Set View Engine
app.engine('handlebars', exphbs({
    defaultLayout: 'home',
    helpers: {
        select: select,
        generateDate: generateDate,
        paginate: paginate
    }}));
app.set('view engine', 'handlebars');


// Upload Middleware
app.use(upload());


// Set Up Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Method Override
app.use(methodOverride('_method'));


// Session
app.use(session({
    secret: 'gekif',
    resave: true,
    saveUninitialized: true,
}));


app.use(flash());


// Passport
app.use(passport.initialize());
app.use(passport.session());


// Local variables using Middleware
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.success_message = req.flash('success_message');
    res.locals.error_message = req.flash('error_message');
    res.locals.form_errors = req.flash('form_errors');
    res.locals.error = req.flash('error');
    next();
});


// Load Routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');
const categories = require('./routes/admin/categories');
const comments = require('./routes/admin/comments');

// Use Routes
app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);
app.use('/admin/categories', categories);
app.use('/admin/comments', comments);


const port = process.env.PORT || 4500;

// Port for website
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
