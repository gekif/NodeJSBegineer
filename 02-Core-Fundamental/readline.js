let readline = require('./readline');
let util = require('./util');
let RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name) => {
    // console.log(name);
    // RL.exit();

    RL.setPrompt(`${name} how old are you? `);
    RL.prompt();
    RL.on('line', (age) => {
        if (age < 18) {
            util.log(`${name.trim()} karena kamu ${age} tahun, kamu gak bisa masuk`);
            RL.close();
        } else {
            util.log(`${name.trim()} karena kamu ${age} tahun, kamu masuk`);
            RL.close();
        }
    });

});

