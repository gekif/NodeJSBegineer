const express = require('express');
const router = express.Router();
const faker = require('faker');
const Post = require('../../models/Post');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.get('/', (req, res) => {

    Post.count({}).then(postCount => {
        res.render('admin/index', {postCount: postCount});
    });

});


router.post('/generate-fake-posts', (req, res) => {

    for (let i = 0; i < req.body.amount; i++) {
        let post = new Post();

        post.title = faker.name.title();
        post.status = 'public';
        post.allowComments = faker.random.boolean();
        post.body = faker.lorem.sentences();

        // post.save().then(savedPost => {});
        post.save((err) => {
            if (err) throw err;
        });

    }
    res.redirect('/admin/posts');
});


module.exports = router;