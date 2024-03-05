document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const hoursInput = document.getElementById("hoursInput");
  const minutesInput = document.getElementById("minutesInput");
  const secondsInput = document.getElementById("secondsInput");
  let timerInterval;

  const padNumber = (number) => {
    return number < 10 ? "0" + number : number;
  };
  startButton.addEventListener("click", function () {
    if (startButton.innerText === "재생") {
      startButton.innerText = "일시정지";
      timerInterval = setInterval(() => {
        if (parseInt(secondsInput.value) > 0) {
          // 초가 0보다 크면 1초씩 줄어들기
          secondsInput.value = padNumber(parseInt(secondsInput.value) - 1);
        } else {
          secondsInput.value = 59; // 0이면 59초로 내려주기
          if (parseInt(minutesInput.value) > 0) {
            minutesInput.value = padNumber(parseInt(minutesInput.value) - 1);
          } else {
            minutesInput.value = 59;
            if (parseInt(hoursInput.value) > 0) {
              hoursInput.value = padNumber(parseInt(hoursInput.value) - 1);
            } else {
              clearInterval(timerInterval);
              startButton.innerText = "재생";
              alert("타이머가 종료되었습니다!");
              hoursInput.value = "00";
              minutesInput.value = "00";
              secondsInput.value = "00";
            }
          }
        }
      }, 1000);
    } else {
      startButton.innerText = "재생";
    }
  });
});
