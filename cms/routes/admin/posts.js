const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('admin/posts', {posts: posts});
    });
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

    const newPost = new Post({
        title: req.body.title,
        status: req.body.status,
        allowComments: allowComments,
        body: req.body.body
    });

    newPost.save().then(savedPost => {
        console.log(savedPost);
        res.redirect('/admin/posts');
    }).catch(error => {
        console.log('Could not save post');
    });

    // console.log(req.body);

    // console.log(req.body.allowComments);
});



module.exports = router;