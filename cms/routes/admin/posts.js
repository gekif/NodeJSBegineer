const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const fs = require('fs');
const { isEmpty, uploadDir } = require('../../helpers/upload-helper');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


/**
 * Display data to from database
 */
router.get('/', (req, res) => {
    Post.find({})
        .then(posts => {
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

    let errors = [];

    if (!req.body.title) {
        errors.push({
            message: 'Please add a title'
        })
    }

    if (!req.body.body) {
        errors.push({
            message: 'Please add a description'
        })
    }

    if (errors.length > 0) {
        res.render('admin/posts/create', {
            errors: errors
        });
    } else {
        let fileName = '';

        if (!isEmpty(req.files)) {
            let file = req.files.file;
            fileName = Date.now() + '-' + file.name;

            file.mv('./public/uploads/' + fileName, (err) => {
                if (err) throw err;
            });
        }

        // Create variable to set up the initial allow comments
        let allowComments = true;

        // Condition Using Ternary Operator
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
            allowComments: req.body.allowComments,
            body: req.body.body,
            file: fileName
        });

        newPost.save()
            .then(savedPost => {
                req.flash('success_message', `Post ${savedPost.title} was created successfully`);
                res.redirect('/admin/posts');

            }).catch(error => {
                res.render('admin/posts/create');
                console.log(error, 'Could not save post');

        });
    }

});


/**
 * Editing the data
 */
router.get('/edit/:id', (req, res) => {
    // Testing the id
    // res.send(req.params.id);

    Post.findOne({_id: req.params.id})
        .then(post => {
        res.render('admin/posts/edit', {post: post});
    });

});


/**
 * PUT Request
 */
router.put('/edit/:id', (req, res) => {
    // Testing Put Request
    // res.send('IT WORKS');

    Post.findOne({_id: req.params.id})
        .then(post => {
        (req.body.allowComments) ? allowComments = true : allowComments = false;

        post.title = req.body.title;
        post.status = req.body.status;
        post.allowComments = req.body.allowComments;
        post.body = req.body.body;

        post.save()
            .then(updatedPost => {
            res.redirect('/admin/posts');
        });
    });

});


/**
 * Delete Data
 */

router.delete('/:id', (req, res) => {
    Post.findOne({_id: req.params.id})
        .then(post  => {
            fs.unlink(uploadDir + post.file, (err) => {

                /*if (err) {
                    throw err;
                } else {
                    post.remove();
                    res.redirect('/admin/posts');
                }*/

                post.remove();
                res.redirect('/admin/posts');

            });
        });
});


module.exports = router;