// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;
var words = [];

rl.on("line", (line) => {
    words.push(line);
    count += 1;
    if (count === parseInt(words[0]) + 1) {
        rl.close();
    }
}).on("close", () => {
    words.shift();
    var result = words.join('');
    console.log(result);
    process.exit();
})