//grab/cache DOM elements ONCE at top of of .js file. This will be cleaner/faster
// Get the button elements, user guess and textbox
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const userGuess = document.getElementById("userGuess");
const messageBox = document.getElementById("message");
let guessCount = 0;

//define random number for game
let number = Math.floor((Math.random() * 10) + 1);//random whole number between 1 and 10 (inclusive)

// Add a click event listener to buttons
guessBtn.addEventListener('click', startGame);
userGuess.addEventListener('keypress', (e) => { //let 'enter' start the game from the input box
    if (e.key === 'Enter') startGame();
});
resetBtn.addEventListener('click', resetGame);

function startGame() {

    //convert input from number element from string into a number 
    let actualNumber = Number(userGuess.value); //grabs the string from "userGuess". need .value in order to read the value from the input
                                                //use Number() to convert the string into a number

    if (isNaN(actualNumber) || userGuess === '') { //use === when doing a comparison. isNaN will check for a number upfront, since '' in the input box is equal to 0;
        displayResult('Enter Valid number 1 - 10!')
    }
    
    guessCount++;

    if (actualNumber > number) {
        displayResult('Too high! Try again.');
        guessCount += 1;
    } else if (actualNumber < number) {
        displayResult('Too low! Try again.');
        guessCount += 1;
    } else {
        displayResult('You Win! Number of guesses: ' + guessCount);
        guessCount += 1;
    }
}

function resetGame() {
    number = Math.floor((Math.random() * 10) + 1);
    guessCount = 0; // reset here only
    displayResult('');
    userGuess.value = ''; // clear input for better UX
}

function displayResult(message) {
    messageBox.innerText = message;
    guessCount = 0;
}