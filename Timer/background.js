chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("problem/")
  ) {
    let urlParts = tab.url.split("/");
    console.log(urlParts);
    if (urlParts.length === 5 && /^\d+$/.test(urlParts[4])) {
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          files: ["content-script.js"],
        })
        .then(() => {});
    }
  }
});
