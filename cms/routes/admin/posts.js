const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.get('/', (req, res) => {
    // res.send('IT WORKS');
    res.render('admin/posts/index');
});

router.get('/create', (req, res) => {
    res.render('admin/posts/create');
});

/**
 * Connecting to the database
 * Insert data to the database
 */
router.post('/create', (req, res) => {

    // Create variable to set up the initial allow comments
    let allowComments = true;

    (req.body.allowComments) ? allowComments = true : allowComments = false;
/*
    if (req.body.allowComments) {
        allowComments = true;
    } else {
        allowComments = false;
    }*/

    Post({
        title: req.body.title,
        status: req.body.status,
        allowComments: req.body.allowComments,
        body: req.body.body
    });

    // console.log(req.body);

    // console.log(req.body.allowComments);
});



module.exports = router;