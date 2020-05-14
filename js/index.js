const container = document.getElementById('container');
const gameboard = document.getElementById('gameboard');
const gameboardRows = document.getElementsByClassName('gameboard__row');
const gameboardColumns = document.getElementsByClassName('gameboard__row--col');

// Style each box height and width
for (const column of gameboardColumns) {
    column.style.height = '100px';
    column.style.width = '100px';
}