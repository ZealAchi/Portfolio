'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-use-before-define */
/* eslint-disable-next-line prefer-arrow-callback */
/* eslint-disable-next-line indent */
/* eslint-disable-next-line semi */
/* eslint-disable-next-line padded-blocks */

var tabsWithContent = function () {
  var tabs = document.querySelectorAll('.tabs li');
  var tabsContent = document.querySelectorAll('.tab-content');

  var deactvateAllTabs = function deactvateAllTabs() {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  var hideTabsContent = function hideTabsContent() {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  var activateTabsContent = function activateTabsContent(tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  var getIndex = function getIndex(el) {
    return [].concat(_toConsumableArray(el.parentElement.children)).indexOf(el);
  };
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  });

  tabs[0].click();
}();