window.onload = function() {
  // Turn into canvas object
  canvas = document.getElementById('canvas');
  canvasContext = canvas.getContext('2d');

  setInterval(function() {
    computerMovement();
    moveBall();
    drawGame();
  }, 1000/30);

  canvas.addEventListener('mousemove', function(event) {
    let mousePosition = calculateMousePosition(event);
    paddleY = mousePosition.y - paddleHeight/2;
  });
};

let canvas;
let canvasContext;

// Turn into ball object
let ballX = 50;
let ballSpeedX = 10;
let ballY = 50;
let ballSpeedY = 5;

// Player
const paddleHeight = 100;
const paddleWidth = 10;
let paddleY = 250;

let compPaddleY = 250;

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function moveBall() {
  if (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
    if (ballY > compPaddleY && ballY < compPaddleY + paddleHeight) {
      let deltaY = ballY - (compPaddleY + paddleHeight / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      resetBall();
      playerScore++;
      scoreTracker();
    }
  } 
  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
    if (ballY > paddleY && ballY < paddleY + paddleHeight) {
      let deltaY = ballY - (paddleY + paddleHeight/2);
      ballSpeedY = deltaY * 0.35;
    } else {
      resetBall();
      computerScore++;
      scoreTracker();
    }
  }
  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
  ballX += ballSpeedX;
  ballY += ballSpeedY;
}

function drawGame() {
  drawRect(0, 0, canvas.width, canvas.height, 'black');
  drawCircle(ballX, ballY, 10, 'white');
  drawRect(0, paddleY, paddleWidth, paddleHeight, 'white');
  drawRect(canvas.width-paddleWidth, compPaddleY, paddleWidth, paddleHeight, 'white');
  canvasContext.fillText(playerScore, 100, 100);
  canvasContext.fillText(computerScore, 700, 100);
}

function drawCircle(x, y, radius, color) {
  canvasContext.fillStyle = color;
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function drawRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function calculateMousePosition(event) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = event.clientX - rect.left - root.scrollLeft;
  let mouseY = event.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

function resetBall() {
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}

function computerMovement() {
  let compPaddleYCenter = compPaddleY + paddleHeight/2;
  if (compPaddleYCenter < ballY - 35) {
    compPaddleY += 5;
  } else if (compPaddleYCenter > ballY + 35) {
    compPaddleY -= 5;
  }
}

function scoreTracker() {
  if (playerScore === winningScore) {
    console.log("player wins!");
    playerScore = 0;
    computerScore = 0;
    resetBall();
  } else if (computerScore === winningScore) {
    console.log("computer wins!");
    playerScore = 0;
    computerScore = 0;
    resetBall();
  }
}