let path = require('./path');

let name = 'Fikar';
let newName = name.toUpperCase(name);

// global.console.log(newName);

// global.console.log(`newName letiable is ${newName}`);

// console.log(__dirname);
// console.log(__filename);
console.log(path.basename(__filename));
