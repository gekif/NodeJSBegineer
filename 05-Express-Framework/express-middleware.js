const express = require('./express');

let app = express();

app.use('/css', express.static(__dirname + '/public'));

// app.use('/css', (req, res, next) => {
// app.use('/', (req, res, next) => {
app.use((req, res, next) => {
    console.log('MIDDLEWARE');
    next();
});



app.get('/', (req, res) => {
    // res.send('HOME');
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="public/style.css">
        <title>Title</title>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
    </html>
    `);
});

app.listen(9999);

console.log('it is working');