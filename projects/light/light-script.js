var bulb = document.getElementById('bulb');
var box = document.querySelector('p');
var switchBulb = document.getElementById('switch');

switchBulb.addEventListener('click', turnOn);

function turnOn() {
    if (switchBulb.textContent === 'Aha!') {
        switchBulb.textContent = 'Hmm..';
        if(bulb.classList){
            bulb.classList.toggle('getlit')
        }
    } else {
        switchBulb.textContent = 'Aha!';
        if(bulb.classList){
            bulb.classList.toggle('getlit')
        }
    }
};