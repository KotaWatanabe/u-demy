const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown = document.getElementById('countdown')

const year = document.getElementById('year')

const currentYear = new Date().getFullYear();

const nextBirthday = new Date(`March 16 ${currentYear + 1} 00:00:00`)

function updateCountdown() {
    const currentTime = new Date();
    const diff = nextBirthday - currentTime;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    days.innerText = d
    hours.innerText = h < 10 ? '0' + h : h;
    minutes.innerText = m < 10 ? '0' + m : m;
    seconds.innerText = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown,1000);

