document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");
  const hoursInput = document.getElementById("hoursInput");
  const minutesInput = document.getElementById("minutesInput");
  const secondsInput = document.getElementById("secondsInput");

  // background파일에 데이터 보내기
  startButton.addEventListener("click", function () {
    if (startButton.innerText === "재생") {
      startButton.innerText = "일시정지";
      chrome.runtime.sendMessage({
        type: "updateTimer",
        payload: {
          hours: hoursInput.value,
          minutes: minutesInput.value,
          seconds: secondsInput.value,
        },
      });
    } else {
      startButton.innerText = "재생";
    }
  });

  resetButton.addEventListener("click", function () {
    startButton.innerText = "재생";
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";
  });

  // background.js에서 받은 타이머 값을 화면에 업데이트
  // chrome.runtime.onMessage.addListener(function (
  //   request,
  //   sender,
  //   sendResponse
  // ) {
  //   if (request.action === "updateTimerValues") {
  //     hoursInput.value = request.hours;
  //     minutesInput.value = request.minutes;
  //     secondsInput.value = request.seconds;
  //   }
  // });
});
