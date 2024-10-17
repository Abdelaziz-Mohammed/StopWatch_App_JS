const timeElement = document.getElementById('time');
const pauseBtn = document.getElementById('pause');
const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('reset');
let currentTime = 0;
let runTimeInterval;
let playState = false;

pauseBtn.addEventListener('click', pauseFun);
playBtn.addEventListener('click', playFun);
resetBtn.addEventListener('click', resetFun);

function pauseFun() {
    console.log(`pause fun & time: ${currentTime}`);
    playState = false;
    clearInterval(runTimeInterval);
}

function resetFun() {
    console.log('reset fun');
    currentTime = 0;
    if (playState) clearInterval(runTimeInterval);
    playState = false;
    timeElement.innerHTML = `00<span>:</span>00<span>:</span>00`;
}

function playFun() {
    console.log(`play fun & time: ${currentTime}`);
    if (!playState) {
        playState = true;
        runTimeInterval = setInterval(() => {
            currentTime++;
            timeElement.innerHTML = getTimeFromNumber(currentTime);
        }, 1000);
    }
}

function getTimeFromNumber(num) {
    let hours = Math.floor(currentTime / 3600);
    let minutes = Math.floor((currentTime % 3600) / 60);
    let seconds = currentTime % 60;
    return `${hours.toString().padStart(2, '0')}<span>:</span>${minutes.toString().padStart(2, '0')}<span>:</span>${seconds.toString().padStart(2, '0')}`;
}
