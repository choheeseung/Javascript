//입력받고 콩과 무는 제외

var fruits = [];
var result = [];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    fruits = line.split(' ').map((el) => el);
    rl.close();
}).on("close", () => {
    result = fruits.filter((element) => element !== '콩' && element !== '무');
    console.log(result);
    process.exit();
});