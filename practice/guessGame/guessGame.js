// Get the button element
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");

// Add a click event listener
guessBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame () {
    let userGuess = document.getElementById("userGuess");
    let number = Math.floor((Math.random() * 10) + 1);//random whole number between 1 and 10 (inclusive)

    if (userGuess == number) {
        displayResult('You Win!')
    } else if (userGuess >= number) {
        displayResult('Too high! Try again.')
    } else if (userGuess <= number) {
        displayResult('Too low! Try again.')
    } else {
        displayResult('Enter Valid input');
    }
}

function resetGame() {
    userGuess = 0;
    number = 0;
    displayResult('');
}

function displayResult(message) {
    const textBox = document.getElementById('message');
    textBox.innerText = message;
}