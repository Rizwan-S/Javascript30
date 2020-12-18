const secondsHand = document.querySelector(`.second-hand`);
const minutesHand = document.querySelector(`.min-hand`);
const hourHand = document.querySelector(`.hour-hand`);

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6 + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6 + 90 + seconds / 10;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = hours * 30 + 90 + minutes / 2;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
