const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('HOME');
});


app.get('/post/:id/category/:category_id', (req, res) => {
// app.get('/post/:id', (req, res) => {
    res.send(`
        <!-- <p> Here is ${req.params.id}</p> -->
        <p> Here is ${req.params.id} and category is ${req.params.category_id}</p>
    `);
});

app.listen(3333);

console.log('it is working');