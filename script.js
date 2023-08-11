document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gridContainer');
  const controlsDiv = document.getElementById('controls');
  const clearBtn = document.getElementById('clear');
  const hide = document.getElementById('hideBtn');
  const sliderElement = document.getElementById('gridSlider');
  const sliderValueElement = document.getElementById('sliderValue');

  setup();

  function setup(){
    drawGrid(20);
    const value = this.value;
    sliderValueElement.textContent = value;
  }

  function drawGrid(gridSize){
    for (let i = 0; i < (gridSize * gridSize); i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      container.appendChild(square);
    }
  }

  // Adding an event listener
  sliderElement.addEventListener('input', function() {
    const value = this.value;
    sliderValueElement.textContent = value;
    changeTheGridSize(value);
  });
  
  function changeTheGridSize(value){
    
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
  
  hideBtn.addEventListener('click', () => hideBorder());
  
  function hideBorder() {
      getAllSquares();
      allGridSquares.forEach((square) => square.classList.toggle("hide"));
  }
});



