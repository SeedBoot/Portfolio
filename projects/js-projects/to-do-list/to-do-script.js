var doField = document.querySelector('.dofield');
var doSubmit = document.querySelector('.dosubmit');

var deleteButton = document.querySelector('.delbtn');

doField.focus();

function submitItem() {
  var userItem = String(doField.value);

  if (userItem != "") {
    var list = document.getElementById('list');
    var li = document.createElement('LI');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'chkbtn';

    var delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.className = 'delbtn';
    delBtn.value = 'delete';
    delBtn.addEventListener('click', function (e) {
      li.parentNode.removeChild(li);
      doField.focus();
    }, false);

    list.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(userItem));
    li.appendChild(delBtn);

    doField.value = '';
    doField.focus();

  } else {
    alert("Please insert a value!");
  }
}

doSubmit.addEventListener('click', submitItem);
