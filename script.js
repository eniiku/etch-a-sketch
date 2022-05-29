const container = document.querySelector('.container');
//creates cells of grid
function createGrid(cell) {
  for (let i = 0; i < cell; i++) {
    for (let j = 0; j < cell; j++) {
      const grid = document.createElement('div')
      grid.className = 'cells';
      container.append(grid);
      container.style.setProperty('grid-template-columns', `repeat(${cell}, 1fr`);
    }
  }
}

//creates hover effect
function hover() {
  container.addEventListener('mouseover', (e) => {
    let grid = e.target;
    grid.style.setProperty('background', 'black')
  });
}

//creates grid based on user input
function buttonClick() {
  document.querySelector('.btn').addEventListener
  ('click', () => {
    const num = parseInt(prompt("How many rows and columns would like ?"));
    if (num <= 100) {
      clearGrid();
      createGrid(num);
      hover();
    } else {
      alert("Please input numbers between 1- 100")
    }
  });
}

buttonClick();

//clear grid
function clearGrid() {
  container.innerHTML = ''
}