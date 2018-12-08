const fs = require('fs');

/*fs.rmdirSync('./newDir');
console.log('directory removed');*/

/*fs.unlinkSync('./newDir/newfile.js');
console.log('files in directory removed');*/

try {
    fs.unlinkSync('./newDir/newfile.js');
    console.log('files in directory removed');
} catch (err) {
    console.log(err + 'here is the error');
}