function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';

}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.classList.remove('error');
}

// function namePlayerConfig() {
//     player1NameElement.textContent = inputElement.textContent;
// }

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); /*trim transforme '    ' en '' , input vide*/

    if (!enteredPlayername) {
        errorsOutputElement.textContent = 'Please enter a valid name!';
        event.target.firstElementChild.classList.add('error');
        return;
    }

const updatedPLayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
updatedPLayerDataElement.children[1].textContent = enteredPlayername

}

