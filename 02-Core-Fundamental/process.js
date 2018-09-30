// console.log(process.argv);

// var flag = process.argv.indexOf('--user');

// console.log(flag);
// console.log(flag - 1);

process.stdout.write('Sapose? ');

process.stdin.on('data', function (answer) {
    // console.log(answer.toString());
    console.log(answer.toString().trim());
    process.exit();
});


