const elements = {
    timer: document.getElementById('timer'),
    list: document.getElementById('lapList'),
    startBtn: document.getElementById('startBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    resetBtn: document.getElementById('resetBtn'),
    createLapBtn: document.getElementById('createLapBtn')
};

let seconds = 0;
let interval;
let lapAmount = 0;

elements.startBtn.addEventListener("click", () => {
    if(interval) return;

    elements.startBtn.disabled = true;

    interval = setInterval(function() {
        seconds++;
        let hours = Math.floor(seconds / 3600)
        let minutes = Math.floor(seconds / 60);
        let min = minutes % 60;
        let sec = seconds % 60;

        elements.timer.textContent = `${formatTime(hours)}:${formatTime(min)}:${formatTime(sec)}`;
    },1000);
});

function pauseTimer() {
    clearInterval(interval);
    interval = null;
    elements.startBtn.disabled = false;
};

function resetTimer() {
    pauseTimer();
    seconds = 0;
    elements.timer.textContent = "00:00:00";
    elements.startBtn.disabled = false;
};

elements.createLapBtn.addEventListener("click", () => {
    lapAmount++;
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60);
    let min = minutes % 60;
    let sec = seconds % 60;

    const lap = document.createElement("li");
    lap.textContent = `Volta ${lapAmount} - ${formatTime(hours)}:${formatTime(min)}:${formatTime(sec)}`;

    elements.list.appendChild(lap);
    
    resetTimer();
});

function formatTime (time){
    return String(time).padStart(2, "0");
};

elements.pauseBtn.addEventListener("click", () => {
    pauseTimer();
});

elements.resetBtn.addEventListener("click", () => {
    resetTimer();
});