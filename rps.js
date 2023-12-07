function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'rock' 
    || playerSelection === 'scissors' && computerSelection === 'paper' 
    || playerSelection === 'rock' && computerSelection === 'scissors') {
        return alert('player wins');
    } 
}




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

console.log(getComputerChoice());
