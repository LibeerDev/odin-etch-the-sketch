const container = document.getElementById('gridContainer');
const controls = document.getElementById('controls');
const clear = document.getElementById('clear');

let isMouseDown = false;

// Creating the grid
container.addEventListener('mousedown', () => {
  isMouseDown = true;
});

container.addEventListener('mouseup', () => {
  isMouseDown = false;
});

container.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    const square = event.target;
    if (square.classList.contains('grid-square')) {
      fillColor(square);
    }
  }
});

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-square');
  container.appendChild(square);
}

function fillColor(square) {
  square.style.backgroundColor = "red";
}

clear.addEventListener('click', () => clearGrid());

function clearGrid(){
    allGridSquares = document.querySelectorAll('.grid-square');
    allGridSquares.forEach((square) => square.style.backgroundColor = "white");
}
