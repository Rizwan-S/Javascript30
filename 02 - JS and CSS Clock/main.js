const secondsHand = document.querySelector(`.second-hand`)

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds * 6) + 90;
    secondsHand.style.tranform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
}

setInterval(setDate, 1000);