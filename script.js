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

//selects color based on input
function setColor() {
  const random = document.querySelector('.random-btn');
  const black = document.querySelector('.black-btn');

  container.addEventListener('mouseover', (e) => {
    let settings = e.target;
    if (random == true) {
      random.addEventListener('click', () => {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        settings.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`
      });
    } else if (black == true) {
      settings.style.backgroundColor = '#000'
    }
  });
  // container.addEventListener('mouseover', (e) => {
  //   let grid = e.target;
  //   grid.style.setProperty('background', 'black')
  // });
}

//creates grid based on user input
function buttonClick() {
  document.querySelector('.btn').addEventListener
  ('click', () => {
    const num = parseInt(prompt("How many rows and columns would like ?"));
    if (num <= 100) {
      clearGrid();
      createGrid(num);
      setColor();
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