var doField = document.querySelector('.dofield');
var doSubmit = document.querySelector('.dosubmit');
var listItems = document.getElementsByTagName('li');

var close = document.getElementsByClassName('delbtn');
var complete = document.getElementsByClassName('chkbtn');
var spanny = document.getElementsByClassName('spaninput');

var i;

doField.focus();

function submitItem() {
  var userItem = String(doField.value);

  if (userItem !== "") {
    var list = document.getElementById('list');
    var li = document.createElement('LI');

    var spanning = document.createElement('span');
    spanning.className = 'spanning';

    var spanInput = document.createElement('span');
    spanInput.className = 'spaninput';

    var checkbox = document.createElement('input');
    checkbox.type = 'button';
    checkbox.className = 'chkbtn';
    checkbox.value = '\u2714';
    checkbox.addEventListener('click', function (e) {
      var boldy = this.parentElement.firstChild;
      if (boldy.classList)
        boldy.classList.toggle('strike');
    });

    var delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.className = 'delbtn';
    delBtn.value = '\u00D7';
    delBtn.addEventListener('click', function (e) {
      var listy = this.parentElement;
      listy.style.display = 'none';
    }, false);

    list.appendChild(li);
    li.appendChild(spanning);

    spanning.appendChild(spanInput);
    spanInput.appendChild(document.createTextNode(userItem));

    spanning.appendChild(checkbox);
    spanning.appendChild(delBtn);

    doField.value = '';
    doField.focus();
  } else {
    alert("Oi! Write your shopping list!");
    doField.focus();
  }
}

doSubmit.addEventListener('click', submitItem);
