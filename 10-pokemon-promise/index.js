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


// const request = new XMLHttpRequest();
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// request.send();
// request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     const urlToAbility = data.abilities[0].ability.url;
//     for (const abily of data.abilities) {
//         const request = new XMLHttpRequest();
//         request.open('GET', abily.ability.url);
//         request.send();
//
//         request.addEventListener('load', function () {
//             const data = JSON.parse(this.responseText);
//             const description = data.effect_entries.find(el => el.language.name === 'en');
//             console.log(description.effect)
//
//         });
//     }
// });

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response =>
       response.json()
    )
    .then(data => {
        for (const abily of data.abilities) {
        fetch(abily.ability.url)
            .then(responseAbility => responseAbility.json())
            .then(description => description.effect_entries.find(el => el.language.name === 'en'))
            .then(description => description.effect)
            .then(console.log)
            .catch(console.log)
        }
    })
    .catch(console.log);
