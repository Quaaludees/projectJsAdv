const generateFetch =  (limit) => {
    return fetch(`https://dummyjson.com/products/?limit=${limit}`);

}

function race(array) {
    Promise.race(array)
        .then((value) => {
            return value.json()
        })
        .then((response) => {
            console.log(response)
        });

}

race([
    generateFetch(30),
    generateFetch(40),
    generateFetch(12),
])