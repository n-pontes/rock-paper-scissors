/*
This function is responsible for making the computer play
It randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
*/


function getComputerChoice() {
    let allChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice;
}

// Tests the randomizer function, if it prints out Rock, Paper or SCissors

//console.log(getComputerChoice());

/**
 * This is the round function, allows to update the player score and computer score
 * Contains the logic for the game
 * 
*/
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        return `You win!`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1;
        return `You win!`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        return `You win!`;
    } else {
        computerScore += 1;
        return `You lose!`;
    }
}