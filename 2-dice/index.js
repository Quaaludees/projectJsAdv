function allRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(allRandom(1, 20));

function gameFn (str) {
    const test = Number(str.replace('d', ' '));
    if (Number.isNaN(test) || !Number.isInteger(test) || test % 2 !== 0 || test < 4 || test > 20) {
        return 'Ne to, uhodi';
    }
    return allRandom(1, test);
}

gameFn('d4')
console.log(gameFn('d2'));
console.log(gameFn('d20'));
console.log(gameFn('d20'));
console.log(gameFn('d30'));
console.log(gameFn('d20'));