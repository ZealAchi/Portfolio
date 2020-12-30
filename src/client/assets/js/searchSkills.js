
var mainSearch = document.getElementById('mainSearch');
mainSearch.addEventListener('keyup', filterNames);
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
    Ocultar(FrontEnd0,filterValue,ocultar0,i)
  }
  for (var i = 0; i < FrontEnd1.length; i++) {
    Ocultar(FrontEnd1,filterValue,ocultar1,i)
  }
  for (var i = 0; i < FrontEnd2.length; i++) {
    Ocultar(FrontEnd2,filterValue,ocultar2,i)
  }
  for (var i = 0; i < FrontEnd3.length; i++) {
     Ocultar(FrontEnd3,filterValue,ocultar3,i)
  }

   function Ocultar(Array,filterValue,ocultar,i){
    var p = Array[i].getElementsByTagName('p')[0];
    if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      ocultar[i].style.cssText = 'flex !important;';
    } else {
      ocultar[i].style.cssText = 'display:none !important';
    }
  }

}