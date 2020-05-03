import findAndReplaceDOMText from "findandreplacedomtext";

chrome.storage.sync.get(['findSource', 'findGlobal', 'findIgnoreCase', 'replace'], function(data) {
  let findFlag = '';
  findFlag += data.findGlobal ? 'g' : '';
  findFlag += data.findIgnoreCase ? 'i' : '';
  findAndReplaceDOMText(document.body, {
    find: new RegExp(data.findSource, findFlag),
    replace: data.replace
  });
});
