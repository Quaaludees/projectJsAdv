// const request = new XMLHttpRequest();
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// request.send();
// request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     const urlToAbility = data.abilities[0].ability.url;
//     console.log(data);
//
//     const request = new XMLHttpRequest();
//     request.open('GET', urlToAbility);
//     request.send();
//
//     request.addEventListener('load', function () {
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//         const description = data.effect_entries.find(el => el.language.name === 'en');
//         console.log(description.effect)
//
//     });
// });


const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    const urlToAbility = data.abilities[0].ability.url;
    for (const abily of data.abilities) {
        const request = new XMLHttpRequest();
        request.open('GET', abily.ability.url);
        request.send();

        request.addEventListener('load', function () {
            const data = JSON.parse(this.responseText);
            const description = data.effect_entries.find(el => el.language.name === 'en');
            console.log(description.effect)

        });
    }
});