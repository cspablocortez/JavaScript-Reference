const hours   = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timezone = document.getElementById('timezone');

function setTime() {
    const now = new Date();
    const formatTime = (time) => (time < 10) ? `0${time}` : time;

    hours.textContent    = formatTime(now.getHours());
    minutes.textContent  = formatTime(now.getMinutes());
    seconds.textContent  = formatTime(now.getSeconds());
    timezone.textContent = now.toLocaleDateString(undefined, {day: '2-digit', timeZoneName: 'long'}).substring(4)
}

setTime();
window.setInterval(setTime, 1000);