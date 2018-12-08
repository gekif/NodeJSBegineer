const http = require('http');

const server = http.createServer((req, res) => {

    /**
     * Read plain text
     */
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hi guys it is fikar');

    /**
     * Read HTML
     */
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hi guys it is fikar</h1>');
});

server.listen(8081);
console.log('The server is running');