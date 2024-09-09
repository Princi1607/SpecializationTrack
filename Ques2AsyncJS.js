let timerInterval;
let totalTimeInSeconds;
let isPaused = false;
let remainingTime;

// Get DOM elements
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

// Function to start the countdown
function startTimer() {
  // Get minutes and seconds from input fields
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;
  if (!isPaused) {
    totalTimeInSeconds = minutes * 60 + seconds;
  }

  if (totalTimeInSeconds > 0) {
    timerInterval = setInterval(updateTimer, 1000);
    isPaused = false;
  }
}

// Function to update the timer display
function updateTimer() {
  if (totalTimeInSeconds <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00';
    return;
  }

  totalTimeInSeconds--;
  displayTime(totalTimeInSeconds);
}

// Function to display the time in MM:SS format
function displayTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to pause the countdown
function pauseTimer() {
  clearInterval(timerInterval);
  isPaused = true;
  remainingTime = totalTimeInSeconds;
}

// Function to reset the countdown
function resetTimer() {
  clearInterval(timerInterval);
  isPaused = false;
  totalTimeInSeconds = 0;
  timerDisplay.textContent = '00:00';
  minutesInput.value = '';
  secondsInput.value = '';
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
