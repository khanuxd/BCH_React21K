
let buttons = document.querySelectorAll('.circle');
let gameLevel = document.getElementById('gameLevel');
let scoreDisplay = document.querySelector('#score');
let overlay = document.getElementById('result');
let gameOverMessage = document.getElementById('gameOverMessage');
let gameOver = document.getElementById('gameOver');

let close = document.getElementById('close');

let startButton = document.getElementById('start');

let gameSound = new Audio('./gameSound.mp3');

let score = 0;
let active = 0;
let timeDelay = 1000;
let missedActionCount = 0;
let myLevel;
let levelTwo = 0;

// Random Number Generator

const getRand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let counter = 0;


// Start Button action

startButton.addEventListener('click', function () {
    startGame();
    counter++;
    if (counter > 0) {
        startButton.textContent = 'End Game';
        if (missedActionCount > 3) {
            // console.log('Counter Missed');
            endGame();
        }
    }

    if (counter > 1) {
        endGame();
    }
})

// Function for the game start

const startGame = () => {
    gameSound.play();

    missedActionCount++;

    buttons[0].onclick = function () {
        clicked(0);
    }
    buttons[1].onclick = function () {
        clicked(1);
    }
    buttons[2].onclick = function () {
        clicked(2);
    }
    buttons[3].onclick = function () {
        clicked(3);
    }

    console.log('Game Started');

    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    active = nextActive;

    // console.log('active:', active);

    // Time interval

    timer = setTimeout(function () {

        startGame();

        if (missedActionCount > 0) {
            gameSound.pause();
        }

        if (missedActionCount > 3) {
            // console.log('Counter Missed');
            endGame();
        }

        // console.log(`Missed counter ${missedActionCount}`);

    }, timeDelay);

    function pickNew(active) {

        let nextActive = getRand(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }

    //targeting the clicked circle

    const clicked = (i) => {

        if (i == active) {

            levelTwo = myLevel;

            // console.log('clicked', i);
            score++;
            myLevel = (score <= 10) ? 0 : Math.floor(score / 10);

            scoreDisplay.textContent = `Your score is ${score}`;
            gameLevel.textContent = `Level: ${myLevel}`;

            if (levelTwo < myLevel) {
                timeDelay -= 50;
                // console.log(`current time delay first ${timeDelay}`);
            }

            // console.log(`current time delay second ${timeDelay}`);

            missedActionCount = 0;
        }
        else {
            endGame();
            // console.log('did not choose the right one');
        }
        // console.log('my click:', i);

    }

}

// End Game Function

const endGame = () => {
    clearTimeout(timer);
    // console.log('Game Over');
    gameSound.play();
    overlay.style.visibility = 'visible';

    if (score < 10) {
        gameOverMessage.textContent = `Come on! You can Do it`;
    } else if (score < 30) {
        gameOverMessage.textContent = `You Are doing great! Keep it Up.`;
    } else {
        gameOverMessage.textContent = `You are Amazing!`;
    }

    gameOver.textContent = `Your score is ${score}`;
}

// Page Reload

const reloadGame = () => {
    window.location.reload();
}

// close icon action

close.addEventListener('click', reloadGame);