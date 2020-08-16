
  var mainSearch = document.getElementById('mainSearch');
  mainSearch.addEventListener('keyup', filterNames);
console.log('asd')
  function filterNames() {
    var filterValue = document.getElementById('mainSearch').value.toUpperCase();

    var ul = document.getElementsByClassName('names');
    var ocultar0 = ul[0].querySelectorAll('div.item-skill')
    var FrontEnd0 = ul[0].querySelectorAll('div.media-content');

    var ocultar1 = ul[1].querySelectorAll('div.item-skill')
    var FrontEnd1 = ul[1].querySelectorAll('div.media-content');

    var ocultar2 = ul[2].querySelectorAll('div.item-skill')
    var FrontEnd2 = ul[2].querySelectorAll('div.media-content');

    var ocultar3 = ul[3].querySelectorAll('div.item-skill')
    var FrontEnd3 = ul[3].querySelectorAll('div.media-content');


    for (var i = 0; i < FrontEnd0.length; i++) {
      var p = FrontEnd0[i].getElementsByTagName('p')[0];
      if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        ocultar0[i].style.cssText = 'flex !important;';
      } else {
        ocultar0[i].style.cssText = 'display:none !important';
      }
    }
    for (var i = 0; i < FrontEnd1.length; i++) {
      var p = FrontEnd1[i].getElementsByTagName('p')[0];
      if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        ocultar1[i].style.cssText = 'flex !important;';
      } else {
        ocultar1[i].style.cssText = 'flex !important;';
        ocultar1[i].style.cssText = 'display:none !important';
      }
    }
    for (var i = 0; i < FrontEnd2.length; i++) {
      var p = FrontEnd2[i].getElementsByTagName('p')[0];
      if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        ocultar2[i].style.cssText = 'flex !important;';
      } else {
        ocultar2[i].style.cssText = 'display:none !important';
      }
    }
    for (var i = 0; i < FrontEnd3.length; i++) {
      var p = FrontEnd3[i].getElementsByTagName('p')[0];
      if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        ocultar3[i].style.cssText = 'flex !important;';
      } else {
        ocultar3[i].style.cssText = 'display:none !important';
      }
    }

  }