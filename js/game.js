const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// Initially, the board is empty so all box is 0
let gameSession;
let url;
let turn;
let winner;

function initializeGameVariable() {
    gameSession = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    url = '';
    turn = 'x';
    winner = '';
}

initializeGameVariable();

// EventListener for click event on each box
for (const column of gameboardColumns) {
    column.addEventListener('click', function () {

        // Only allow box to be filled if it is still empty (which means, btnPlayAgain is hidden)
        if (window.getComputedStyle(btnPlayAgain).visibility === 'hidden') {

            if (column.childElementCount === 0) {
                // Fill the respective box in the board with the turn -> change the turn if the box isn't filled yet
                gameSession[column.tag] = turn;

                if (turn === 'x') {
                    url = 'asset/cross.jpg';
                    turn = 'o';
                } else {
                    url = 'asset/circle.jpg';
                    turn = 'x';
                }

                let image = document.createElement('img');
                image.src = url;
                image.alt = 'Board content';
                image.style.maxWidth = '75%';
                image.style.marginTop = '10px';
                column.appendChild(image);

                // Check for win condition everytime player click on each box
                checkWinner(gameSession);
            }
        }
    });
}

function checkWinner(gameSession) {
    for (const condition of winConditions) {
        if (gameSession[condition[0]] !== 0 && gameSession[condition[1]] === gameSession[condition[0]] && gameSession[condition[2]] === gameSession[condition[1]]) {
            // Turn is changed already by the time this code executes, so the winner is flipped
            winner = (turn === 'o') ? 'x' : 'o';
            btnPlayAgain.style.visibility = 'visible';
            winnerText.style.visibility = 'visible';
            winnerText.innerText = `The winner is ${winner.toUpperCase()}!`;
        }
    }
}

btnPlayAgain.addEventListener('click', function () {
    // Reset the gameboard
    for (const column of gameboardColumns) {
        column.innerHTML = '';
    }

    btnPlayAgain.style.visibility = 'hidden';
    winnerText.style.visibility = 'hidden';

    initializeGameVariable();
});