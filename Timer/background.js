chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // 크롬 api에 접근하기 위해 background.js에 작성
  if (changeInfo.status === "complete" && tab.url.includes("problem/")) {
    let urlParts = tab.url.split("/");
    console.log(urlParts);
    if (urlParts.length === length && /^\d+$/.test(urlParts[2])) {
      tabId = tabId;
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          files: ["content-script.js"],
        })
        .then(() => {});
    }
  }
});
