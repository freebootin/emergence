const height = 600;
const width = 600;
const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

canvas.height = height;
canvas.width = width;


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // update game state and draw screen
  c.beginPath();
  c.strokeStyle = 'green';
  c.rect(20, 20, 100, 100);
  c.stroke();

}

// Call animate last
animate();
