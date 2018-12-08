const fs = require('fs');

if (!fs.exists('view')) {
    fs.mkdir('views', (err) => {
        if (err) return err;
        fs.writeFile('./views/new.html', 'Hello from views', (err) => {
            if (err) return err;
            console.log('Directory and file created');
        });
    });
}

