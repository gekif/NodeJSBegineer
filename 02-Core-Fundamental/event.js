const events = require('event-stream');
let emitter = new events.EventEmitter();

emitter.on('newEvent', (message) => {
    console.log(`Message: ${message}`);
});

emitter.emit('newEvent', 'Hello gays this is fikar');