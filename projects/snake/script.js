const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const canvW = canvas.width = 420;
const canvH = canvas.height = 420;

//defining key/ keypress
var Key = {
  _pressed: {},
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) {
  Key.onKeyup(event);
}, false);
window.addEventListener('keydown', function(event) {
  Key.onKeydown(event);
}, false);
//

//object literalz
//to define the walls
var wallLeft = {
  x:5,
  y:5,
  w:5,
  h:canvH - 10
}
var wallRight = {
  x:canvW - 10,
  y:5,
  w:5,
  h:canvH - 10
}
var wallTop = {
  x:5,
  y:5,
  w:canvW - 10,
  h:5
}
var wallBottom = {
  x:5,
  y:canvH - 10,
  w:canvW - 10,
  h:5
}
//to define the player
var player = {
  x:(canvW / 2) - 10,
  y:(canvH / 2) - 10,
  w:20,
  h:20
}

function square(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h)
  ctx.fillStyle = '#3e3f36';
  ctx.fill();
  ctx.closePath();
};

/*
function Player() {
  this.x = 0;
  this.y = 0;
}

Player.prototype.draw = function(ctx) {
  ctx.fillRect(player.x, player.y, 20, 20);
};
Player.prototype.moveLeft = function() {
  this.x -= 1;
};
Player.prototype.moveRight = function() {
  this.x += 1;
};
Player.prototype.moveUp = function() {
  this.y -= 1;
};
Player.prototype.moveRight = function() {
  this.y += 1;
};
*/

function draw() {
  ctx.clearRect(0,0,canvW,canvH);

  //render the walls
  new square(wallLeft.x, wallLeft.y, wallLeft.w, wallLeft.h);
  new square(wallRight.x, wallRight.y, wallRight.w, wallRight.h);
  new square(wallTop.x, wallTop.y, wallTop.w, wallTop.h);
  new square(wallBottom.x, wallBottom.y, wallBottom.w, wallBottom.h);
  //render palyer
  new square(player.x, player.y, player.w, player.h);

  if (Key.isDown(Key.UP)) {
    player.y-= 3;
  };
  if (Key.isDown(Key.LEFT))  {
    player.x-= 3;
  };
  if (Key.isDown(Key.DOWN))  {
    player.y+= 3;
  };
  if (Key.isDown(Key.RIGHT))  {
    player.x+= 3;
  };

  if (player.y < (wallTop.y + wallTop.h)
  || (player.y + player.h) > wallBottom.y
  || player.x < (wallLeft.x + wallLeft.w)
  || (player.x + player.w) > wallRight.x) {
    alert('Game Over!');
    document.location.reload();
  }

  requestAnimationFrame(draw);
}

draw();

/*function random(number) {
  return Math.floor(Math.random()*number);
}*/

/*function circleLoop(){
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }*/
