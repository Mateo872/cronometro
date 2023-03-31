const count = document.querySelector("h3"),
  btnInit = document.querySelector(".btn-init"),
  btnPause = document.querySelector(".btn-pause"),
  btnReset = document.querySelector(".btn-reset");

btnInit.addEventListener("click", timerStart);

let hours = 0,
  minutes = 0,
  seconds = 0,
  miliSeconds = 0,
  timer;

btnPause.className = "btn btn-secondary";
btnPause.disabled = true;

btnReset.className = "btn btn-secondary";
btnReset.disabled = true;

function timerStart() {
  btnInit.className = "btn btn-secondary";
  btnInit.disabled = true;

  timer = setInterval(() => {
    miliSeconds++;

    if (miliSeconds === 100) {
      seconds++;
      miliSeconds = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    count.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
      seconds
    )},${formatTime(miliSeconds)}`;
  }, 10);

  btnPause.addEventListener("click", timerStop);
  btnReset.addEventListener("click", timerReset);

  btnPause.className = "btn btn-success";
  btnPause.disabled = false;

  btnReset.className = "btn btn-success";
  btnReset.disabled = false;
}

function timerStop() {
  clearInterval(timer);

  btnInit.className = "btn btn-success";
  btnInit.disabled = false;

  btnPause.className = "btn btn-secondary";
  btnPause.disabled = true;

  btnReset.addEventListener("click", timerReset);

  btnReset.className = "btn btn-success";
  btnReset.disabled = false;
}

function timerReset() {
  clearInterval(timer);

  hours = 0;
  minutes = 0;
  seconds = 0;
  miliSeconds = 0;

  count.innerHTML = `00:00:00,00`;

  btnInit.className = "btn btn-success";
  btnInit.disabled = false;

  btnPause.className = "btn btn-secondary";
  btnPause.disabled = true;

  btnReset.className = "btn btn-secondary";
  btnReset.disabled = true;
}

const formatTime = (time) => {
  if (time < 10) time = `0${time}`;
  return time;
};
