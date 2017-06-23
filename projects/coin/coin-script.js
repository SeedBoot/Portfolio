var headcount = document.querySelector('.heads');
var tailcount = document.querySelector('.tails');
var flipContainer = document.querySelector('.flip-container');

var coin = ['Heads!', 'Tails!'];
var heads = 0;
var tails = 0;
          
function coinFlip(){
    var flippy =  coin[Math.floor(Math.random()*coin.length)];
    var flipResult = document.querySelector('.result');

    flipResult.innerHTML = flippy;

    if(flipResult.innerHTML === 'Heads!') {
        heads += 1;
        headcount.innerHTML = 'Heads: ' + heads;
    } else {
        tails += 1;
        tailcount.innerHTML = 'Tails: ' + tails;
    };
};
            
flipContainer.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('flip');
    coinFlip();
});
