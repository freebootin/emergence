"use strict";
const height = 600;
const width = 600;
const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const startPosition = {x: 0, y: 0};
const tileSize = 10;
const gameboard = generateBoard(height, width, tileSize);

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
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  drawBoard(gameboard, startPosition.x, startPosition.y, tileSize);

  // update game state and draw screen

}

// Call animate last
animate();
