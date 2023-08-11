document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gridContainer');
  const controlsDiv = document.getElementById('controls');
  const clearBtn = document.getElementById('clear');
  const hide = document.getElementById('hideBtn');
  const sliderElement = document.getElementById('gridSlider');
  const sliderValueElement = document.getElementById('sliderValue');
  const color = document.getElementById('color-input');

  let isBorderHidden = true;

  setup();
  
  color.backgroundColor = "red";

  function setup() {
    drawGrid(16);
    const value = this.value;
    sliderValueElement.textContent = value;
  }

  function update() {
    toggleBorderVisibility();
  }

  function drawGrid(gridSize){
    for (let i = 0; i < (gridSize * gridSize); i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.style.width = `calc(100% / ${gridSize})`;
      square.style.paddingBottom = `calc(100% / ${gridSize})`;
      container.appendChild(square);
    }
    update();
  }

  // Adding an event listener
  sliderElement.addEventListener('input', function() {
    const value = this.value;
    sliderValueElement.textContent = value;
    changeTheGridSize(value);
  });
  
  function changeTheGridSize(value){
    getAllSquares();
    allGridSquares.forEach((square) => {
      square.remove();
    })
    drawGrid(value);
  }

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
  
  
hideBtn.addEventListener('click', () => toggleBorderVisibility());

function toggleBorderVisibility() {
  isBorderHidden = !isBorderHidden; // Toggle the boolean value
  container.classList.toggle("hide-border", isBorderHidden);
  getAllSquares();
  allGridSquares.forEach((square) => {
    square.classList.toggle("hide", isBorderHidden); // Apply the "hide" class based on the boolean value
  });
}

color.addEventListener('input', () => {
  
} )


// DOMContentFunction end
});
