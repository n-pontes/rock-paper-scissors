const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const results = document.getElementById('resultsCont');
const gameCont = document.getElementById('gameContent');
const player = document.getElementById('pScore');
const computer = document.getElementById('cScore');
const selectWinner = document.getElementById('winner');
/* 
Global variables for the player and computers score
*/

let playerScore = 0;
let computerScore = 0;

/*
This function is responsible for making the computer play
It randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
*/

const getComputerChoice = () => {
    let allChoices = ["rock", "paper", "scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice;
};

/**
 * the function playRound grabs two parameters player choice and the random parameter for the computer
 * 
*/

const playRound = (playerSelection, computerSelection) => {
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
};

// Updates in real time the player and computer scores

const updateDisplay = () => {
    player.textContent = `The player score is: ${playerScore}`;
    computer.textContent = `The computer score is: ${computerScore}`;

};

// Event listeners for player selection

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    gameCont.textContent = result;
    updateDisplay();
});


paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    gameCont.textContent = result;
    updateDisplay();
});

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    gameCont.textContent = result;
    updateDisplay();
});
