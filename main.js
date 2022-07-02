const height = 600;
const width = 600;
const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

// gameboard
const gameboard = [
  [ 'blue', 'green', 'yellow', 'red' ],
  [ 'red', 'blue', 'green', 'yellow']
];

canvas.height = height;
canvas.width = width;

function drawSquare(xStart, yStart, side, color) {
  /**
   * Draw a square at coordinates given.
   *
   * @param {number} xStart The upper left corner x position.
   * @param {number} yStart The upper left corner y position.
   * @param {number} side The length of each side of the square.
   * @param {string} color What color the squares border will be.
   */
  c.beginPath();
  c.strokeStyle = color;
  c.rect(xStart, yStart, side, side);
  c.stroke();
}

function drawBoard(board, xStart, yStart, tileSize) {
  for (let i = 0; i < board.length; i++) {
    let nextY = yStart + (tileSize * i);
    for (let j = 0; j < board[i].length; j++) {
      let nextX = xStart + (tileSize * j);
      drawSquare(nextX, nextY, tileSize, board[i][j]);
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  drawBoard(gameboard, 50, 50, 50);

  // update game state and draw screen

}

// Call animate last
animate();
