
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript('AutoLance.init()');
});