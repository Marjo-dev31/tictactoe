function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!')
        return;
    }
    gameActiveArea.style.display = 'block';
    activePlayerNameElement.textContent = players[activePlayer].name;
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    }
    else (activePlayer = 0);
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectedGameField(event) {
    if (event.target.tagName !== 'LI') {
        return;
    }
    
    const selectedField = event.target
    const selectedColumn = selectedField.dataset.column - 1;
    const selectedRow = selectedField.dataset.row - 1;
    
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please choose an empty field!')
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList = 'disabled';
    
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    
    
    switchPlayer();
}

function checkForGameOver() {

}