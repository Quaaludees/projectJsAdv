const button = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');
const reset = document.querySelector('.reset');
let cashedClickId = null;
let clickCounter = 0;

for (let i = 0; i < button.children.length; i++) {
    button.children[i].setAttribute('data-id', i)
}
reset.addEventListener('click', function () {
    if (clickCounter !== 0) {
        clickCounter = 0;
        counter.innerHTML = 'Нажато:' + clickCounter;
        const prevClickButton = document.querySelector(`.wrapper_button[data-id="${cashedClickId}"]`);
        prevClickButton.innerHTML = 'Нажми меня';
        prevClickButton.disabled = false;
        reset.disabled = true;
    }
})
button.addEventListener('click', function (e) {
    const id = e.target.getAttribute('data-id');
    if (e.target.className === 'wrapper') {
        return;
    }
    e.target.innerHTML = 'Нажато.';
    e.target.disabled = true;
    reset.disabled = false;

    if (cashedClickId) {
        const prevClickButton = document.querySelector(`.wrapper_button[data-id="${cashedClickId}"]`);
        prevClickButton.innerHTML = 'Нажми меня';
        prevClickButton.disabled = false;

    }
    cashedClickId = id;
    // for (let i = 0; i < button.children.length; i++) {
    //     if (id === button.children[i].getAttribute('data-id')) {
    //         button.children[i].innerHTML = 'Нажато';
    //     }  else {
    //         button.children[i].innerHTML = 'Нажми меня.';
    //     }
    //
    // }
    clickCounter++;
    counter.innerHTML = 'Нажато:' + clickCounter;
});

