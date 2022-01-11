"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_config_1 = require("./configs/readline.config");
readline_config_1.rl.question('Masukan: ', (name) => {
    const arrName = name.toUpperCase().split('').reverse();
    arrName.forEach((value) => {
        console.log(value);
    });
    process.exit();
});
