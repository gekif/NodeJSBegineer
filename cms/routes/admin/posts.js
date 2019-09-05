const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

/**
 * Display data to from database
 */
router.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('admin/posts', {posts: posts});
    });
});

router.get('/create', (req, res) => {
    res.render('admin/posts/create');
});

/**
 * Insert data to the database
 */
router.post('/create', (req, res) => {

    // Create variable to set up the initial allow comments
    let allowComments = true;

    (req.body.allowComments) ? allowComments = true : allowComments = false;

    // Second condition
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
});

router.get('/edit/:id', (req, res) => {
    // Testing the id
    // res.send(req.params.id);

    res.render('admin/posts/edit');
});



module.exports = router;