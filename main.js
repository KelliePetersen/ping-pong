window.onload = function() {
  // Turn into canvas object
  canvas = document.getElementById('canvas');
  canvasContext = canvas.getContext('2d');

  setInterval(function() {
    moveBall();
    drawGame();
  }, 1000/30);
};

let canvas;
let canvasContext;

// Turn into ball object
let ballX = 50;
let ballSpeedX = 5;

function moveBall() {
  if (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  } 
  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  ballX += ballSpeedX;
}

function drawGame() {
  createRect(0, 0, canvas.width, canvas.height, 'black');
  // Turn into ball object/balls constructor, with random traits
  createRect(ballX, 200, 10, 10, 'white');
  // Turn into player object
  createRect(0, 100, 25, 50, 'white');
}

function createRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}