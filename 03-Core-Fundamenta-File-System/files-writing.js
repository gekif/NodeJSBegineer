const fs = require('fs');

fs.writeFile('data.html', 'Hello man \n', 'utf8', (err) => {
    if (err) return err;
    console.log('The file has been save');
});


fs.appendFile('data.html', '\nHello man this appended data \n', 'utf8', (err) => {
    if (err) return err;
    console.log('The appended has been save');
});