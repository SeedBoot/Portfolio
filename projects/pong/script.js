var canvas = document.getElementById('pongCanvas');
var ctx = canvas.getContext('2d');

var color = '#ffffff';

var player1Score = 0;
var player2Score = 0;

//scenery
var wallsX = canvas.width;
var wallsY = 2;

var divideX = 2;
var divideY = canvas.height;

//defines the ball
var ball = 8
var ballX = (canvas.width-ball)/2;
var ballY = (canvas.height-ball)/2;
var xBallSpeed = 2;
var yBallSpeed = 2;

//defines the paddles
var paddleHeight = 50;
var paddleWidth = 7;
var player1Y = (canvas.height-paddleHeight)/2;
var player2Y = (canvas.height-paddleHeight)/2;

//controls
var wPressed = false;
var sPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 87) {
        wPressed = true;
    }
    else if(e.keyCode === 83) {
        sPressed = true;
    }
    else if(e.keyCode === 38) {
        upPressed = true;
    }
    else if(e.keyCode === 40) {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode === 87) {
        wPressed = false;
    }
    else if(e.keyCode === 83) {
        sPressed = false;
    }
    else if(e.keyCode === 38) {
        upPressed = false;
    }
    else if(e.keyCode === 40) {
        downPressed = false;
    }
}
//end controls

//scenery shapes
function drawWallTop() {
    ctx.beginPath();
    ctx.rect(0, 0, wallsX, wallsY);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawWallBottom() {
    ctx.beginPath();
    ctx.rect(0, (canvas.height-wallsY), wallsX, wallsY);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawDivide() {
    ctx.beginPath();
    ctx.rect((canvas.width/2)-(divideX/2), 0, divideX, divideY);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
//player and ball shapes
function drawPlayer1() {
    ctx.beginPath();
    ctx.rect(10, player1Y, paddleWidth, paddleHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawPlayer2() {
    ctx.beginPath();
    ctx.rect((470-paddleWidth), player2Y, paddleWidth, paddleHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawBall() {
    ctx.beginPath();
    ctx.rect(ballX, ballY, ball, ball);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
//keeping score
function drawPlayer1Score() {
    ctx.font = '24px Courier';
    ctx.fillStyle = color;
    ctx.fillText('test', (canvas.width/2)-55, 25, 50);
}
function drawPlayer2Score() {
    ctx.font = '24px Courier';
    ctx.fillStyle = color;
    ctx.fillText('test', (canvas.width/2)+5, 25, 50);
}

function draw() {
    //resets canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw scenery
    drawWallTop();
    drawWallBottom();
    drawDivide();
    //draw player and ball shapes
    drawBall();
    drawPlayer1();
    drawPlayer2();
    //draw score
    drawPlayer1Score();
    drawPlayer2Score();

    //make ball collide with y axis
    if(ballY + yBallSpeed > canvas.height-ball || ballY + yBallSpeed < 0) {
        yBallSpeed = -yBallSpeed;
    }

    //TEMP ball collide with x
    if(ballX + xBallSpeed > canvas.width-ball || ballX + xBallSpeed < 0) {
        xBallSpeed = -xBallSpeed;
    }

    //paddle speed and will collide with frame
    //player 1
    if(wPressed && player1Y > wallsY) {
        player1Y -= 7;
    }
    else if( sPressed && player1Y < canvas.height - (paddleHeight-wallsY) ) {
        player1Y += 7;
    }
    //player2
    if(upPressed && player2Y > wallY) {
        player2Y -= 7;
    }
    else if( downPressed && player2Y < canvas.height - (paddleHeight-wallsY) ) {
        player2Y += 7;
    }

    ballX += xBallSpeed;
    ballY += yBallSpeed;

    requestAnimationFrame(draw);
}

draw();