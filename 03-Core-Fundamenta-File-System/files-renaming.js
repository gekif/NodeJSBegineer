const fs = require('fs');

/**
 * Renaming Files
 */
/*
fs.renameSync('./newfile.js', 'newfile2.js');
console.log('rename success');*/

/**
 * Renaming files or move directories
 */
fs.renameSync('./newDir/majelisSeluler', './majelisDir');
console.log('moving file and rename success');