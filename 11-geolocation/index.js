function render (coords) {
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');
    latitude.innerText = `Ваша широта: ${coords.latitude}`;
    longitude.innerText = `Ваша долгота: ${coords.longitude}`;
    console.log(coords)
}

const geo = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);

})
geo.then(res => {
    render(res.coords)
})