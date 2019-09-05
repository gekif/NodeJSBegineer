const express = require('express');
const router = express.Router();
const faker = require('faker');
const User = require('../../models/Post');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.get('/', (req, res) => {
    res.render('admin/index');
});

router.post('/generate-fake-posts', (req, res) => {
    for (let i = 0; i < req.body.amount; i++) {
        let post = new Post();

        post.title = faker.
    }
});

/*router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
});*/



module.exports = router;