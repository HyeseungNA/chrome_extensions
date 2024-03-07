chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "updateTimer") {
    hours = parseInt(request.payload.hours);
    minutes = parseInt(request.payload.minutes);
    seconds = parseInt(request.payload.seconds);
    console.log(seconds);
    timerInterval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(timerInterval);
            chrome.tabs.query(
              { active: true, lastFocusedWindow: true, currentWindow: true },
              (tabs) => {
                console.log(tabs[0]);
                chrome.runtime.sendMessage(tabs[0].id, {
                  type: "startUpdate",
                  payload: {
                    buttonText: "재생",
                  },
                });
              }
            );

            hours = 0;
            minutes = 0;
            seconds = 0;
          }
        }
      }
    }, 1000);
  }

  return true; // 비동기 처리를 위해 true 반환
});
