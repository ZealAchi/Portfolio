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

let tabsWithContent = (function () {
  let tabs = document.querySelectorAll('.tabs li');
  let tabsContent = document.querySelectorAll('.tab-content');

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let hideTabsContent = function () {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
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
}());
