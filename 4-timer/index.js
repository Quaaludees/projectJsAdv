
const month = document.getElementById("month");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const current = new Date();
const newYear = new Date(`1 Jan ${current.getFullYear() +1} 00:00:00`)


function specialDay () {
    const dayNow = new Date();
    return 31 - new Date(dayNow.getFullYear(), dayNow.getMonth(), 31).getDate();
}

console.log(specialDay())
function timer() {
    const dayNow = Date.now();
    const difference = newYear - dayNow;
    const mon = Math.floor((difference / 1000 / 60 / 60 / 24) % 12);
    const da = (specialDay() - current.getDate() - 1);
    const hou = Math.floor((difference / 1000 / 60 / 60) % 24);
    const min = Math.floor((difference / 1000 / 60) % 60);
    const sec = Math.floor((difference / 1000) % 60);
    const currentDay = da < 0 ? 0 : da;



    month.innerHTML = mon <  10 ? "0" + mon : mon;
    day.innerHTML = da < 10 ? "0" + currentDay : currentDay;
    hour.innerHTML = hou < 10 ? "0" + hou : hou;
    minute.innerHTML = min < 10 ? "0" + min : min;
    second.innerHTML = sec < 10 ?  "0" + sec : sec;

} setInterval(timer, 1000);

