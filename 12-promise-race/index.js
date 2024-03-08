
const race = (promiseArray) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArray.length ;i++) {
            Promise.resolve(promiseArray[i])
                .then(resolve, reject)
                .catch(reject);
        }
    });
};

const test1 = new Promise( (resolve) => {
    setTimeout(resolve, 101, 'Alonso');
});

const test2 = new Promise( (resolve) => {
    setTimeout(resolve, 102, 'Hamilton');
});

const test3 = new Promise( (resolve, reject) => {
    setTimeout(reject, 100, 'Verstappen');
});

race([test1, test2, test3]).then( (value) => {
    console.log(value);
}).catch(function (e){
    console.log(e);
});



