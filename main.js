const height = 600;
const width = 600;
const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

// gameboard
const gameboard = [ 'blue', 'green', 'yellow', 'red' ];

canvas.height = height;
canvas.width = width;

function drawSquare(xStart, yStart, width, height, color) {
  c.beginPath();
  c.strokeStyle = color;
  c.rect(xStart, yStart, width, height);
  c.stroke();
}

function drawBoard(board) {
  let xStart = 50;
  let yStart = 50;

  for (let i = 0; i < board.length; i++) {
    let nextX = xStart + (xStart * i);
    drawSquare(nextX, yStart, 50, 50, board[i]);
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  drawBoard(gameboard);

  // update game state and draw screen

}

// Call animate last
animate();
