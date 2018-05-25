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

function moveBall() {
  ballX += 10;
}

function drawGame() {
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  // Turn into ball object/balls constructor, with random traits
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(ballX, 200, 10, 10);

  // Turn into player object
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 100, 25, 50);
}