const express = require('express');
const router = express.Router();


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
 */
router.post('/create', (req, res) => {
    res.send('WORKED');
});



module.exports = router;