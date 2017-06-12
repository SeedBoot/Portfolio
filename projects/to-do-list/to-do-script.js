var doField = document.querySelector('.dofield');
var myForm = document.getElementsByClassName('myForm')[0];

doField.focus();

/*
// try get from localStorage, and if not there, fall back to empty array.
JSON.parse(localStorage.getItem('items')) || [];
*/

function submitItem() {
  var userItem = String(doField.value);

  if (userItem !== "") {
    var list = document.getElementById('list');
    
    var li = document.createElement('li');
    
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
        if (boldy.classList) {
          boldy.classList.toggle('strike');
        };
      });
    
    var delBtn = document.createElement('input');
      delBtn.type = 'button';
      delBtn.className = 'delbtn';
      delBtn.value = '\u00D7';
      delBtn.addEventListener('click', function (e) {
        //var listy = this.parentElement;
        //listy.style.display = 'none';
        var listy = this.parentElement.parentElement;
        listy.remove(listy);
      }, false);

    list.appendChild(li);
    li.appendChild(spanning);
    spanning.appendChild(spanInput);
    spanInput.appendChild(document.createTextNode(userItem));
    spanning.appendChild(checkbox);
    spanning.appendChild(delBtn);
    
    /*
    var listC = document.querySelector('li');
    if (localStorage){
      localStorage.setItem('items', JSON.stringify(listC));
    };
    */

    doField.value = '';
    doField.focus();
    
  } else {
    alert("Oi! Write your shopping list!");
    
    doField.focus();
  }
}

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    submitItem();
});

/*
var listC = document.querySelector('li');
    if (localStorage){
      localStorage.setItem('items', JSON.stringify(listC));
    };
*/
