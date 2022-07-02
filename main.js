const height = 600;
const width = 600;
const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

canvas.height = height;
canvas.width = width;

function drawSquare(xStart, yStart, width, height, color) {
  c.beginPath();
  c.strokeStyle = color;
  c.rect(xStart, yStart, width, height);
  c.stroke();
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  drawSquare(100, 100, 20, 100, 'pink');

  // update game state and draw screen

}

// Call animate last
animate();
