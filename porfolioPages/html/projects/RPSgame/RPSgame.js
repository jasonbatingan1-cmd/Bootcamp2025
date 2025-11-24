//define selection of R, P, or S for the computer
let action = [
    'rock',
    'paper',
    'scissors'
];

//fucntion to run when button is clicked
function startGame() {

//define each player's result
let resultP1
let resultP2

//get user's input
if (document.getElementById("rock").checked) { //use '.checked' to see if radio is selected.
    resultP1 = 'rock';//use single '=' for assigment, '==' and '===' are used for comparison
} else if (document.getElementById("paper").checked) {
    resultP1 = 'paper';
} else if (document.getElementById("scissors").checked) {
    resultP1 = 'scissors';
} else {
    alert('Please make a choice!')
    return;
}


//randomize RPS selection for computer player. this will take index position
resultP2 = Math.floor(Math.random() * action.length);

//convert index selection into string
let player2 = action[resultP2];

//enter computer player's choice in textbox
updateCPUChoice(player2);

    if (resultP1 === player2) {
        updateResult('Draw!');
    } else if (
        (resultP1 === 'rock' && player2 === 'scissors') ||
        (resultP1 === 'paper' && player2 === 'rock') ||
        (resultP1 === 'scissors' && player2 === 'paper')
    ) {
        updateResult('You Win!');
    } else {
        updateResult('You Lose!');
    }
}
//function to update text boxes:
function updateCPUChoice(choice) {
    const textBox = document.getElementById('cpuChoice');
    textBox.textContent = 'Computer Choice: ' + choice;
}

function updateResult(message) {
    const textBox = document.getElementById("result");
    textBox.textContent = 'Result: ' + message;//use '.textContext' or '.innerText' to update the text in an <h3> element
}

//function to reset the game
function restartGame() {
    let radios = document.querySelectorAll('input[name="rps"]');
    radios.forEach(radio => radio.checked = false);

    updateCPUChoice('');
    updateResult('');
}