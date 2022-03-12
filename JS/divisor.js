// 지시사항을 참고하여 코드를 작성하세요.
var num = 0;
var fibo = [0, 1];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    num = parseInt(line);
    rl.close();
}).on("close", () => {
    for (var i = 2; i < num; i++){
        var nextNum = fibo[i-2] + fibo[i-1];
        fibo.push(nextNum);
    }
    console.log(fibo);
    process.exit();
});