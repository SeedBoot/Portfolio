var doField = document.querySelector('.dofield');
var doSubmit = document.querySelector('.dosubmit');
var listItems = document.getElementsByTagName('li');

var close = document.getElementsByClassName('delbtn');
var complete = document.getElementsByClassName('chkbtn');
var spanny = document.getElementsByClassName('spaninput');

var i;

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

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
    checkbox.addEventListener('click', function() { 
      var boldy = this.parentElement.children;
      ///////WTF I JUST WANT TO STRIKETHROUGH////////
      //if (hasClass(boldy, 'strike') !== true) {
      //  boldy.classList.removeAttribute('strike')
      //} else {
        boldy.classList.add('strike');
      });
    //});
    /*  
      if(boldy.hasClass('strike') !== true) {
        for (i = 0; i < boldy.length; i++) {
          boldy[i].classList.add('strike')
        }
      }
    });*/

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

/*
function strikethrough() {
//Completes items in list
for (i = 0; i < spanny.length; i++) {
  spanny[i].style.textDecoration = "line-through";
}
};
    
//    .onclick = function() {
//    alert('hello');
//    var strike = document.getElementsByClassName('strike');
//    style.setProperty("text-decoration", "line-through");
//  }
//};

var complete2 = document.querySelector('chkbtn');
complete2.addEventListener('click', strikethrough);
*/
