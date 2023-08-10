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