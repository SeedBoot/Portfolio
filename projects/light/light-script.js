var bulb = document.getElementById('bulb');
var switchBulb = document.getElementById('switch');
var wall = document.getElementById('wall');

switchBulb.addEventListener('click', turnOn);

function turnOn() {
    if (switchBulb.textContent === 'Aha!') {
        switchBulb.textContent = 'Hmm..';
        if(bulb.classList){
            wall.classList.toggle('bgroundgetlit')
            bulb.classList.toggle('getlit')
            bulb.classList.toggle('bulbCol')
            
        }
    } else {
        switchBulb.textContent = 'Aha!';
        if(bulb.classList){
            wall.classList.toggle('bgroundgetlit')
            bulb.classList.toggle('getlit')
            bulb.classList.toggle('bulbCol')
        }
    }
};