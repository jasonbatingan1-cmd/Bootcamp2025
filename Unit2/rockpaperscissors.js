console.log("Rock, Paper, Scissors Game:");
console.log("===========================");

//define selection of R, P, or S
let action = [
    'rock',
    'paper',
    'scissors'
];

//define each player's result
let resultP1 
let resultP2

//randomize RPS selection. this will take index position
resultP1 = Math.floor(Math.random() * action.length);
resultP2 = Math.floor(Math.random() * action.length);

//convert index selection into string
let player1 = action[resultP1];
let player2 = action[resultP2];

//display each players' selection
console.log('Player 1: ' + player1);
console.log('Player 2: ' + player2);

// switch (resultP1, resultP2) {
//     case 0, 0: //rock vs. rock
//         console.log('Draw')
//         break;
//     case 0, 1: //rock vs. paper
//         console.log('Player 2 Wins')
//         break;
//     case 0, 2: //rock vs. scissors
//         console.log('Player 1 Wins')
//         break;

//     case 1, 1: //paper vs. paper
//         console.log('Draw')
//         break;
//     case 1, 2: //paper vs. scissors
//         console.log('Player 1 Wins')
//         break;
//     case 1, 0: //paper vs. rock
//         console.log('Player 1 Wins')
//         break;

//     case 2, 0: //scissors vs. rock
//         console.log('Player 2 Wins')
//         break;
//     case 2, 1: //scissors vs. paper
//         console.log('Player 1 Wins')
//         break;
//     case 2, 2: //scissors vs. scissors
//         console.log('Draw')
//         break;
// } tried to use a swtich for game results, but not getting correct results.
// switch cases are good for static, singular input

//using if else to determine winner, much clearer than switch case
if (player1 === player2) {
    console.log('Draw');
} else if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'paper' && player2 === 'rock') ||
    (player1 === 'scissors' && player2 === 'paper')
) {
    console.log('Player 1 Wins');
} else {
    console.log('Player 2 Wins');
}
