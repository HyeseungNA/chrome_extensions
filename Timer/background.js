chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // 크롬 api에 접근하기 위해 background.js에 작성
  if (changeInfo.status === "complete" && tab.url.includes("problem/")) {
    console.log(tab);
    tabId = tabId;
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["content-script.js"],
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
