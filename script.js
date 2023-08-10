const container = document.getElementById('gridContainer');
const controls = document.getElementById('controls');
const clear = document.getElementById('clear');
const hideBtn = document.getElementById('hideBtn');

let isMouseDown = false;

// Creating the grid
window.addEventListener('mousedown', () => {
  isMouseDown = true;
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
});

window.addEventListener('mousemove', (event) => {
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


function getAllSquares() {
    return allGridSquares = document.querySelectorAll('.grid-square');
}

function fillColor(square) {
  square.style.backgroundColor = "red";
}

clear.addEventListener('click', () => clearGrid());

function clearGrid(){
    getAllSquares();
    allGridSquares.forEach((square) => square.style.backgroundColor = "white");
}

hideBtn.addEventListener('click', () => hideBorder());

function hideBorder() {
    getAllSquares();
    allGridSquares.forEach((square) => square.classList.toggle("hide"));
} 