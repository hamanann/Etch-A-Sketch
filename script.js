function addDiv() {
    const newDiv = document.createElement('div');
    const cont = document.querySelector('.container');
    cont.appendChild(newDiv);
    newDiv.classList.add('square');
}

function createGrid(dimension) {
    for (let i = 0; i < dimension * dimension; i++) {
        addDiv();
    }
}

createGrid(16);