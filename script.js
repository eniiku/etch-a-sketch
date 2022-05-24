const container = document.querySelector('.container');
//creates cells of grid
function createGrid(cell) {
  for (let i = 0; i < cell; i++) {
    for (let j = 0; j < cell; j++) {
      const grid = document.createElement('div')
      grid.className = 'cells';
      container.append(grid);
      container.style.setProperty('grid-template-columns', 'repeat(' + cell + ', 1fr)' );
    }
  }
}

createGrid(20);

//creates hover effect
function hover() {
  container.addEventListener('mouseover', (e) => {
    let grid = e.target;
    grid.style.setProperty('background', 'blue')
  });
}

hover();