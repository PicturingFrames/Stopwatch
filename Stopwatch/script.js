// Convert the time to a format of hours, minutes, and milliseconds

function timeToString(time) {
  let inHours = time / 3600000;
  let hours = Math.floor(inHours);

  let inMinutes = (inHours - hours) * 60;
  let minutes = Math.floor(inMinutes);

  let inSeconds = (inMinutes - minutes) * 60;
  let seconds = Math.floor(inSeconds);

  let inMilliseconds = (inSeconds - seconds) * 100;
  let milliseconds = Math.floor(inMilliseconds);

  let formattedM = minutes.toString().padStart(2, "0");
  let formattedS = seconds.toString().padStart(2, "0");
  let formattedMS = milliseconds.toString().padStart(2, "0");

  return `${formattedM}:${formattedS}:${formattedMS}`;
}

let startTime;
let elapsed = 0;
let interval;

// Function to modify innerHTML

function print(txt) {
  document.getElementById('time').innerHTML = txt;
}

// Create the start, pause, and reset functions

function start() {
  startTime = Date.now() - elapsed;
  interval = setInterval(function printTime() {
    elapsed = Date.now() - startTime;
    print(timeToString(elapsed));
  }, 10);
  showBtn("Pause")
}
function pause() {
  clearInterval(interval);
  showBtn("Start");
}
function reset() {
  clearInterval(interval);
  print("00:00:00");
  elapsed = 0;
  showBtn("Start");
}

// Function to display the buttons

function showBtn(btnKey) {
  const btnToShow = btnKey === "Play" ? playBtn : pauseBtn;
  const btnToHide = btnKey === "Play" ? playBtn : pauseBtn;
  btnToShow.style.display = "inline-block";
  btnToHide.style.display = "inline-block";
}

// Event listeners

let playBtn = document.getElementById('button-play');
let resetBtn = document.getElementById('button-reset');
let pauseBtn = document.getElementById('button-pause');

playBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
