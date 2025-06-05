let timer;
let timeLeft = 25 * 60;
let isRunning = false;
let currentMode = 'work';

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').innerText =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
        isRunning = false;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  timeLeft = currentMode === 'work' ? 25 * 60 : 5 * 60;
  updateDisplay();
}

function setMode(mode) {
  currentMode = mode;
  timeLeft = mode === 'work' ? 25 * 60 : 5 * 60;
  resetTimer();
}

updateDisplay();
