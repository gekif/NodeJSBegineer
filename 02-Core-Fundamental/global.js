var path = require('path');

var name = 'Fikar';
var newName = name.toUpperCase(name);

// global.console.log(newName);

// global.console.log(`newName variable is ${newName}`);

// console.log(__dirname);
// console.log(__filename);
console.log(path.basename(__filename));
