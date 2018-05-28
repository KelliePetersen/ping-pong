window.onload = function() {
  // Turn into canvas object
  canvas = document.getElementById('canvas');
  canvasContext = canvas.getContext('2d');

  setInterval(function() {
    moveBall();
    drawGame();
  }, 1000/30);

  canvas.addEventListener('mousemove', function(event) {
    let mousePosition = calculateMousePosition(event);
    paddleY = mousePosition.y;
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
let paddleY = 250;

function moveBall() {
  if (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  } 
  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
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
  // Turn into ball object/balls constructor, with random traits
  drawCircle(ballX, ballY, 10, 'white');
  // Turn into player object
  drawRect(0, paddleY, 25, 50, 'white');
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