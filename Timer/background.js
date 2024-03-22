chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // 크롬 api에 접근하기 위해 background.js에 작성
  console.log(changeInfo.status);
  if (changeInfo.status === "loading" && tab.url.includes("problem/")) {
    let urlParts = tab.url.split("/");
    console.log(urlParts);
    if (urlParts.length === 5 && /^\d+$/.test(urlParts[4])) {
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
