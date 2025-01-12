const countDown = () => {
    const targetDate = new Date("2025-01-29T00:00:00");
    let now = new Date();
    let difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }
    return timeLeft;

}

const updateTime = () => {
    let timeLeft = countDown();
    let countDownWatch = document.getElementById("time");

    if(Object.keys(timeLeft).length > 0) {
        countDownWatch.innerHTML = ` Còn ${timeLeft.days} ngày ${timeLeft.hours} giờ ${timeLeft.minutes} phút ${timeLeft.seconds} giây là đến Tết nguyên đán 2025!
        `;
    } else {
        countDownWatch.innerHTML = `Happy new year 2026`;
        clearInterval(timeInterval);
    }
}

const timeInterval = setInterval(updateTime,1000);
updateTime();
