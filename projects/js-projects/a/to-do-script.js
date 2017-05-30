var doField = document.querySelector('.doField');
var doSubmit = document.querySelector('.doSubmit');

//var listItems = document.querySelector('.listItems');

var deleteButton;

doField.focus();

function submitItem() {
  var userItem = String(doField.value);
  var list = document.getElementById('list');
  var li = document.createElement('LI');
  
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.className = 'delbtn';
  deleteButton.value = 'X';
  
  list.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(userItem));
  li.appendChild(deleteButton);
  
  doField.value = '';
  doField.focus();
}

doSubmit.addEventListener('click', submitItem);

function deleteItem() {}