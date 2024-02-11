function allRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(allRandom(1, 20));

function gameFn (str) {
    const countGame = Number(str.replace('d', ''));
    if (Number.isNaN(countGame) || !Number.isInteger(countGame) || countGame % 2 !== 0 || countGame < 4 || countGame > 20) {
        return 'Ne to, uhodi';
    }
    return allRandom(1, countGame);
}

gameFn('d4')
console.log(gameFn('d2'));
console.log(gameFn('d20'));
console.log(gameFn('d20'));
console.log(gameFn('d30'));
console.log(gameFn('d20'));