const array = [
    { id: 1, name: 'Vasya'},
    { id: 2, name: 'Petya'},
    { id: 1, name: 'Vasya'},
];

const uniqueArr = new Set(array.map((el) => array.find((item) => el.id === item.id)));

console.log('1', uniqueArr);

const uniqueArrS2 = (arr) => {
    const track = new Set()
    return arr.filter(({ id }) => {
        return track.has(id) ? false : track.add(id)
    });
}

console.log('2', uniqueArrS2(array))

function uniqueArrL2 (arr) {
    const uniq = new Set();
    return arr.filter((el) => {
        if (uniq.has(el.id)) {
            return false;
        } else {
            return uniq.add(el.id);
        }
    });
}

console.log('2.1', uniqueArrL2(array))



const uniqueArr3 = Object.values(array.reduce((acc, value) => {
    if (!acc[value.id]) {
        acc[value.id] = value;
    }
    return acc;
}, {}));
console.log('3', uniqueArr3);
