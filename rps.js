function getComputerChoice() {
    let allChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice;
}

// Tests the randomizer function, if it prints out Rock, Paper or SCissors

//console.log(getComputerChoice());