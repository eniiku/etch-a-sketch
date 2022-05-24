//creates cells of grid
function createGrid(cell) {
      const container = document.querySelector('.container');
      for (let i = 0; i < cell; i++) {
        for (let j = 0; j < cell; j++) {
          let grid = document.createElement('div')
          grid.className = 'cells';
          container.append(grid);
          container.style.setProperty('grid-template-columns', 'repeat(' + cell + ', 1fr)' );
        }
      }
    }

    createGrid(20);