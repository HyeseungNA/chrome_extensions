// document.addEventListener("DOMContentLoaded", function () {
//   const startButton = document.getElementById("startButton");
//   const resetButton = document.getElementById("resetButton");
//   const hoursInput = document.getElementById("hoursInput");
//   const minutesInput = document.getElementById("minutesInput");
//   const secondsInput = document.getElementById("secondsInput");

//   // background파일에 데이터 보내기
//   startButton.addEventListener("click", function () {
//     if (startButton.innerText === "재생") {
//       startButton.innerText = "일시정지";
//       chrome.runtime.sendMessage(
//         {
//           type: "updateTimer",
//           payload: {
//             hours: hoursInput.value,
//             minutes: minutesInput.value,
//             seconds: secondsInput.value,
//             startButton: startButton.innerText,
//           },
//         },
//         (response) => {
//           console.log(response.res);
//         }
//       );
//     } else {
//       startButton.innerText = "재생";
//     }
//   });

//   // 버튼 업데이트
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.type === "startUpdate") {
//       console.log(
//         "message received from chrome.tabs.sendMessage: " +
//           request.payload.message
//       );
//     }
//     sendResponse({});
//     return true;
//   });

//   resetButton.addEventListener("click", function () {
//     startButton.innerText = "재생";
//     hoursInput.value = "00";
//     minutesInput.value = "00";
//     secondsInput.value = "00";
//   });
// });
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.a == "Hi") {
//     //메시지의 a가 Hi라면 Hello!라고 반응 보내기.
//     sendResponse("Hello!");
//   }
// });
