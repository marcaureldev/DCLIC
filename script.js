// Constantes du jeu
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const INITIAL_SCORE = 20;

// Elements du DOM
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const guessInput = document.querySelector("#guessNumber");

// Variables du jeu
let secretNumber = generateRandomNumber();
let currentScore = INITIAL_SCORE;
let highscoreValue = 0;

// Génère un nombre aléatoire entre MIN_NUMBER et MAX_NUMBER
function generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

// Met à jour le message affiché
function displayMessage(text) {
    message.textContent = text;
}

function checkNumber() {
    const guessNumber = Number(guessInput.value);

    // Vérifie si le joueur a encore des points
    if (currentScore <= 1) {
        displayMessage("💥 Game Over!");
        score.textContent = "0";
        return;
    }

    // Compare le nombre deviné avec le nombre secret
    if (guessNumber === secretNumber) {
        displayMessage("Great, you win!");
        number.textContent = secretNumber;
        document.body.style.backgroundColor = "green";
        
        // Met à jour le highscore si nécessaire
        if (currentScore > highscoreValue) {
            highscoreValue = currentScore;
            highscore.textContent = highscoreValue;
        }
    } else {
        // Mauvaise réponse
        const message = guessNumber > secretNumber ? "Too high!" : "Too low!";
        displayMessage(message);
        currentScore--;
        score.textContent = currentScore;
    }
}

function resetGame() {
    currentScore = INITIAL_SCORE;
    secretNumber = generateRandomNumber();
    
    // Reset de l'interface
    number.textContent = "?";
    score.textContent = INITIAL_SCORE;
    guessInput.value = "";
    document.body.style.backgroundColor = "#222";
    displayMessage("Start guessing...");
}