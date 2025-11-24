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

    // Check for invalid input (empty, not a number, out of range)
    if (isNaN(actualNumber) || actualNumber < 1 || actualNumber > 10) {
        displayResult('Enter a valid number between 1 and 10!');
        return; // stop the function so guessCount doesn't increase
    }
    guessCount++;
    if (actualNumber > number) {
        displayResult('Too high! Try again. Current Guess Count: ' + guessCount);
    } else if (actualNumber < number) {
        displayResult('Too low! Try again. Current Guess Count: ' + guessCount);
    } else {
        displayResult('You Win! Number of guesses: ' + guessCount); 
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
}