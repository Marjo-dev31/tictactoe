const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');


const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
// const submitConfigBtnElement = document.getElementById('submit-config-btn');

// const inputElement = document.getElementById('player-name');
// const player1NameElement = document.getElementById('player-1-name');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

// submitConfigBtnElement.addEventListener('click',namePlayerConfig);


console.dir(document)