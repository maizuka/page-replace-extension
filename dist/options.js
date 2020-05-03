"use strict";
function constructOptions(findSource, replace) {
  chrome.storage.sync.set({
    findSource: findSource,
    replace: replace
  }, function () {
    console.log('findSource: ' + findSource);
    console.log('replace: ' + replace);
  });
}

const findElem = $('#findSource');
const replaceElem = $('#replace');
const saveButton = $('#save');
const resetButton = $('#reset');
saveButton.on('click', function () {
  constructOptions(findElem.val(), replaceElem.val());
});

function resetForm() {
  chrome.storage.sync.get(['findSource', 'replace'], function (data) {
    findElem.val(data.findSource);
    replaceElem.val(data.replace);
  });
}
resetForm();

resetButton.on('click', function () {
  resetForm();
});