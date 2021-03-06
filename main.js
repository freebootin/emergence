"use strict";
const height = 600;
const width = 600;
const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const startPosition = {x: 0, y: 0};
const tileSize = 10;
const gameboard = generateBoard(height, width, tileSize);
const mousePosition = {x: 0, y: 0};

canvas.addEventListener("mousedown", function(e) {
  howdoi(e, canvas);
});

canvas.height = height;
canvas.width = width;

function generateBoard(canvasHeight, canvasWidth, squareSize) {
  // figure out how much space you have to work with.
  let xCells = Math.floor(canvasHeight / squareSize);
  let yCells = Math.floor(canvasWidth / squareSize);
  let board = [];

  for (let i = 0; i < yCells; i++) {
    let row = [];
    for (let j = 0; j < xCells; j++) {
      if ((i + j) % 2 == 0) {
        row.push('green');
      } else {
        row.push('blue');
      }
    }
    board.push(row);
  }
  return board;
}

function howdoi(e, canvas) {
  /** @function
   * @howdoi
   * A fucntion to experiment with techniques and features before adding
   * them to the project.
   */
  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  console.log(e);
  console.log("Coordinate x: " + x, "coordinate y: " + y);
}
  
function gameOfLife(board) {
  /** @function
   * @name gameOfLife
   * Applys the rules for Conway's Game of Life to all the cells of a
   * rectanglear game board. Then returns an updated gameboard.
   *
   * @param {array} board A gameboard consisting of a 2d array.
   */

  /* Rules:
   * 1: Any live cell with two or three live neighbors survives.
   * 2: Any dead cell with three live neighbors becomes a live cell.
   * 3: all other live cells die in the next generation.
   */
  console.log("Game of Life");
}

function drawSquare(xStart, yStart, side, color) {
  /** @function
   * @name drawSquare
   * Draw a square at coordinates given.
   *
   * @param {number} xStart The upper left corner x position.
   * @param {number} yStart The upper left corner y position.
   * @param {number} side The length of each side of the square.
   * @param {string} color What color the squares border will be.
   */
  c.beginPath();
  c.fillStyle = color;
  //c.strokeStyle = color;
  //c.rect(xStart, yStart, side, side);
  c.fillRect(xStart, yStart, side, side);
  c.stroke();
}

function drawBoard(board, xStart, yStart, tileSize) {
  /** @function
   * @name drawBoard
   * Draws a board using a board object.
   *
   * @param {array} board The gameboard, a 2d array of string specified colors.
   * @param {number} xStart The starting x position.
   * @param {number} yStart The starting y position.
   * @param {number} tileSize The size of the sides of each square board tile.
   */
  for (let i = 0; i < board.length; i++) {
    let nextY = yStart + (tileSize * i);
    for (let j = 0; j < board[i].length; j++) {
      let nextX = xStart + (tileSize * j);
      drawSquare(nextX, nextY, tileSize, board[i][j]);
    }
  }
}

function animate() {
  /** @function
   * @name animate
   * Animates the canvas be repeatedly calling game logic and updating the
   * canvas.
   *
   */
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard(gameboard, startPosition.x, startPosition.y, tileSize);
  requestAnimationFrame(animate);


}

// Call animate last
animate();
