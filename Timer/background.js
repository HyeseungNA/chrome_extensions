// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.type === "updateTimer") {
//     hours = parseInt(request.payload.hours);
//     minutes = parseInt(request.payload.minutes);
//     seconds = parseInt(request.payload.seconds);
//     console.log(seconds);
//     timerInterval = setInterval(() => {
//       if (seconds > 0) {
//         seconds--;
//       } else {
//         if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else {
//           if (hours > 0) {
//             hours--;
//             minutes = 59;
//             seconds = 59;
//           } else {
//             clearInterval(timerInterval);
//             chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//               console.log(tabs);
//               if (tabs.length > 0) {
//                 // 탭이 존재하는 경우에만 처리
//                 const tab = tabs[0];
//                 console.log(tab);
//                 chrome.tabs.sendMessage(
//                   tab.id,
//                   {
//                     type: "startUpdate",
//                     payload: {
//                       buttonText: "재생",
//                     },
//                   },
//                   (response) => {
//                     console.log("메시지를 보냈습니다");
//                   }
//                 );
//               } else {
//                 console.log("탭이 존재하지 않습니다.");
//               }
//             });
//             hours = 0;
//             minutes = 0;
//             seconds = 0;
//           }
//         }
//       }
//     }, 1000);
//   }

//   return true; // 비동기 처리를 위해 true 반환
// });
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, { a: "Hi" }, (data) => {
//     //a에 Hi를 넣어 보내고 콜백
//     console.log(data); // Hello!
//   });
// });

function myFunction() {
  alert("안녕");
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.includes("problem/")) {
    console.log(tab);
    tabId = tabId;
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        func: myFunction,
      })
      .then(() => {
        console.log("에에에");
      });
    //   if (tab.url.includes("problem")) {
    //     alert("안녕~~~");
    //   }
    // });
  }
});
