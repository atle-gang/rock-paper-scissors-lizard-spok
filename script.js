const weaponOptions = ['rock', 'paper', 'scissors', 'lizard', 'spok'];

// create function that will randomise weaponOptions everytime function is called
function getComputerChoice(){
    const computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
    return computerChoice
};


// create function that checks the winner based on their selections
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'lizard') ||
        (playerSelection === 'lizard' && computerSelection === 'spok') ||
        (playerSelection === 'rock' && computerSelection === 'lizard') ||
        (playerSelection === 'spok' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'lizard') ||
        (playerSelection === 'lizard' && computerSelection === 'paper') ||
        (playerSelection === 'spok' && computerSelection === 'rock')
    ) {
        return 'Player'
    } else {
        return 'Computer'
    }
};


// create a function that gets and validates user input
function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput === false){
        const playerChoice = prompt("Select your weapon: ");
        if (playerChoice === null) {
            continue;
        } else {
            const playerChoiceInLower = playerChoice.toLowerCase();
            if (weaponOptions.includes(playerChoiceInLower)) {
                validatedInput = true;
                return playerChoiceInLower;
            };
        };
    };
};

// create a function that simulates a single round of the game
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result === 'Tie') {
        return "It's a tie!"
    } else if (result === 'Player') {
        return `You wins! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
};