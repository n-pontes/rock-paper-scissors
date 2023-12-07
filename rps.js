function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            console.log("Its a tie!");
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log("Paper beats Rock, you lose!");
        } else {
            console.log ("Rock beats Scissors, you win!");
        }
    }

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



