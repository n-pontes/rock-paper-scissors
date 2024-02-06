let playerScore = 0;
let computerScore = 0;

/*
This function is responsible for making the computer play
It randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
*/


function getComputerChoice() {
    let allChoices = ["rock", "paper", "scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice;
}

// Tests the randomizer function, if it prints out Rock, Paper or SCissors

//console.log(getComputerChoice());

/**
 * The game keeps on playing until either the player or the computer achieves 5 points
 */

function game () {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Do you choose, rock, paper or scissors?");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

//console.log(getComputerChoice());

/**
 * This is the round function, allows to update the player score and computer score
 * Contains the logic for the game
 * 
*/
/*function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}*/

// the function playRound grabs two parameters player choice and the random parameter for the computer

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // function to transform the string into lowercase just so its not case sensitive
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return "Invalid Input!";
    }
}

function winGame () {
    if (playerScore == 5) {
        return "You won the game!";
    } else if (computerScore == 5) {
        return "You lost the game!";
    }
}

// calls the game function
game();

// calls the win game function
winGame();


// Shows the player and computer scores
console.log(playerScore);
console.log(computerScore);