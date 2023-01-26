let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById('text-output');
let userNumUpdate = document.getElementById('input-box');
let audio = new Audio('./music.mp3');
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("new-game-button").style.display = "none";
    document.getElementById("game-area").style.display = "none";
};
const startGame = () => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
}

// Start new Game
const startNewGame = () => {
    document.getElementById("new-game-button").style.display = "inline";
    userNumUpdate.setAttribute('disabled',true);
}

// Reload the page
const newGameBegin = () => {
    audio.play();
    window.location.reload();
}

// Main logic
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("input-box").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById('guesses').innerHTML = userGuess;

    // check the value is low or high

    if(userGuess.length<maxGuess){
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High 😵";
            userNumUpdate.value = "";
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 🥺";
            userNumUpdate.value = "";
        }
        else {
            userGuessUpdate.innerHTML = "It's Correct 🤩";
            userNumUpdate.value = "";
            startNewGame();
        }
    }
    else{
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You loose!! Correct number was ${computerGuess}`;
            userNumUpdate.value = "";
            startNewGame();
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You loose!! Correct number was ${computerGuess}`;
            userNumUpdate.value = "";
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "It's Correct 🤩";
            userNumUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById('attempts').innerHTML = userGuess.length;
}
const easy = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hard = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};