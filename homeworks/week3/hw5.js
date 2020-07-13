/* eslint-disable indent */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

const firstStrBigger = (strA, strB) => {
    // 先不管字串前面可能有零（過不去再說）
    if (strA.length === strB.length) { // If equal string length, check from left to right
        for (let i = 0; i < strA.length; i += 1) {
            // if (Number(strA[i]) === Number(strB[i])) {
            //     continue;
            // } else if (Number(strA[i]) > Number(strB[i])) {
            //     return true;
            // } else {
            //     return false;
            // }
            if (Number(strA[i]) !== Number(strB[i])) {
                if (Number(strA[i]) > Number(strB[i])) {
                    return true;
                }
                return false;
            }
        }
    }
    if (strA.length > strB.length) { // if not equal string length
        return true;
    }
    return false;
};

function largerOrSmaller(num1, num2, method) {
    if (num1 === num2) {
        return 'DRAW'; // 一樣大
    }

    if (method === '1') { // 比大
        // console.log('method 1')
        return firstStrBigger(num1, num2) ? 'A' : 'B';
    }
    // 比小
    // console.log('method 2')
    return firstStrBigger(num1, num2) ? 'B' : 'A';
}

const solve = (input) => {
    const tmp = input[0];
    for (let i = 1; i <= tmp; i += 1) {
        const [a, b, k] = input[i].split(' ');
        console.log(largerOrSmaller(a, b, k));
    }
};

rl.on('close', () => {
    solve(lines);
});
