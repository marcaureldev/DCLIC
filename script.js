// const nombre = Math.floor(Math.random() * 20) + 1
const nombre = 12
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
let scoreValue = Number(score.textContent)
const highscore = document.querySelector('.highscore')
let highscoreValue = Number(highscore.textContent)


function checkNumber() {
    let guessNumber = document.querySelector('#guessNumber').value
    guessNumber = Number(guessNumber)

    if (guessNumber === nombre) {
        number.textContent = nombre
        document.body.style.backgroundColor = 'green'
        message.textContent = 'Great, you win!'
        if (scoreValue > highscoreValue) {
            highscore.textContent = scoreValue
        }

    }
    else if(guessNumber < nombre ) {
        message.textContent = 'Too low'
        scoreValue = scoreValue - 1
        score.textContent = scoreValue

    }
    else if(guessNumber > nombre ) {
        message.textContent = 'Too high'
        scoreValue = scoreValue - 1
        score.textContent = scoreValue

    }
}

function resetGame() {
    number.textContent = "?"
    document.body.style.backgroundColor = "#222"
    message.textContent = "Start guessing..."
    score.textContent = 20
}

