chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({
    findSource: "。",
    findGlobal: true,
    findIgnoreCase: false,
    replace: "あ"
  }, function() {
    console.log("Initial variables have been set.");
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "./main.js"});
  console.log("main script is executed.");
});
