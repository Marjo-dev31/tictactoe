let editedPlayer = 0

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');

// const submitConfigBtnElement = document.getElementById('submit-config-btn');

// const inputElement = document.getElementById('player-name');
// const player1NameElement = document.getElementById('player-1-name');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

// submitConfigBtnElement.addEventListener('click',namePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);

const errorsOutputElement = document.getElementById('error-message')

console.dir(document)