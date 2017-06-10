var doField = document.querySelector('.dofield');
var myForm = document.getElementsByClassName('myForm')[0];

doField.focus();

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
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
	// Yippee! We can use localStorage awesomeness
}
else {
	// Too bad, no localStorage for us
}
*/
/*
//var list = document.getElementById('list');
//var listChild = document.querySelectorAll('li');

localStorage.setItem('chCh', JSON.stringify(document.querySelectorAll('li')));

var retrieval = if (localStorage){localStorage.getItem('chCh')};
*/