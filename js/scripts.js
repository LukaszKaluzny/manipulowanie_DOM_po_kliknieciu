var list = document.getElementById('list');
var add = document.getElementById('addElem');
var digit = 1;

add.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + (digit++) + '</li>'
});

