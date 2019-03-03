const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({
    port: 3232
});

WSS.on('connection', (ws) => {
    console.log('We are connected');
});