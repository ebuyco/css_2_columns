

function columnize (wrapper, pickSelector ){
    const grid = document.querySelector(wrapper);

    console.log(grid);
    const picks = Array.from(grid.children).filter(el => el.matches(pickSelector));
    const everthingElse = Array.from(grid.children).filter(el =>
         !el.matches(pickSelector));

    // create left
    const left = document.createElement('div');
    left.classList.add('left');
    picks.forEach(pick => left.appendChild(pick));
    console.log(left);

    // create right
    const right = document.createElement('div');
    right.classList.add('right');
    everthingElse.forEach(el => right.appendChild(el));

    // back to dom
    grid.appendChild(left);
    grid.appendChild(right);
}

columnize('.wrapper', 'img');