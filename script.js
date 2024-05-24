const DEFAULT_DRAWING_COLOR = 'gray';
const DEFAULT_ROW_NUMBER = 16;

const grid = document.querySelector('.grid');
const drawBtn = document.querySelector('#draw');
const eraseBtn = document.querySelector('#erase');
const size = document.querySelector('#size');

let isErase = false;

size.addEventListener('click', resize);

drawBtn.addEventListener('click', () => {
  drawBtn.style.backgroundColor = 'lightgray';
  eraseBtn.style.backgroundColor = 'white';
});
eraseBtn.addEventListener('click', () => {
  eraseBtn.style.backgroundColor = 'lightgray';
  drawBtn.style.backgroundColor = 'white';
});

function setUpGrid(rowNumber) {
  const squareSize = 800 / rowNumber;
  let i = 0;
  let gridSize = rowNumber ** 2;
  while (i < gridSize) {
    const square = document.createElement('div');
    Object.assign(square.style, {
      flexBasis: `${squareSize}px`,
      height: `${squareSize}px`,
      border: '1px solid lightgray',
    });
    square.addEventListener('mouseover', draw);
    grid.appendChild(square);
    i++;
  }
}

function draw(e) {
  e.target.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function erase(e) {
  e.target.style.backgroundColor = 'white';
}

function resize() {
  let newRowNumber = Number(prompt('How many boxes per row (between 16-100)?'));
  grid.innerHTML = '';
  setUpGrid(newRowNumber);
}
setUpGrid(DEFAULT_ROW_NUMBER);
