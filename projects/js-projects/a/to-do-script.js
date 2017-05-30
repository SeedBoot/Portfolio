var doField = document.querySelector('.doField');
var doSubmit = document.querySelector('.doSubmit');

//var listItems = document.querySelector('.listItems');



doField.focus();

function submitItem() {
  var userItem = String(doField.value);
  var list = document.getElementById('list');
  var li = document.createElement('LI');
  
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  var delBtn = document.createElement('input');
  delBtn.type = 'button';
  delBtn.className = 'delbtn';
  delBtn.value = 'X';
  
  list.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(userItem));
  li.appendChild(delBtn);
  
  doField.value = '';
  doField.focus();
  
  deleteButton.addEventListener('click', deleteItem);
}

doSubmit.addEventListener('click', submitItem);

var deleteButton = document.querySelector('.delbtn');

function deleteItem() {
  deleteButton.parentNode.removeChild(deleteButton);
  
  doField.focus();
}

