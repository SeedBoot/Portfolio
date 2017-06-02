var doField = document.querySelector('.dofield');
var doSubmit = document.querySelector('.dosubmit');
var deleteButton = document.querySelector('.delbtn');

doField.focus();

var listItems = document.getElementsByTagName('li');
var i;
for (i = 0; i < listItems.length; i++) {
  var checkbox = document.createElement('input');
  checkbox.type = 'button';
  checkbox.className = 'chkbtn';
  checkbox.value = '\u2714';
  listItems[i].appendChild(checkbox);
}

function submitItem() {
  var userItem = String(doField.value);

  if (userItem != "") {
    var list = document.getElementById('list');
    var li = document.createElement('LI');

    var checkbox = document.createElement('input');
    checkbox.type = 'button';
    checkbox.className = 'chkbtn';
    checkbox.value = '\u2714';
    
    var spanInput = document.createElement('span');
    spanInput.className = 'spaninput';

    var delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.className = 'delbtn';
    delBtn.value = 'X';
    delBtn.addEventListener('click', function (e) {
      li.parentNode.removeChild(li);
      doField.focus();
    }, false);

    list.appendChild(li);
    
    li.appendChild(spanInput);
    spanInput.appendChild(document.createTextNode(userItem));
    li.appendChild(checkbox);
    li.appendChild(delBtn);

    doField.value = '';
    doField.focus();

  } else {
    alert("Oi! Write your shopping list!");
  }
}

doSubmit.addEventListener('click', submitItem);
