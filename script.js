const weaponOptions = ['rock', 'paper', 'scissors', 'lizard', 'spok'];


// Grab html elements
const resultMessage = document.getElementById('result-message');
const finalOutcome = document.getElementById('final-outcome') 


// Generate a random weapon choice each time the function is called.
function getComputerChoice(){
    const computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
    return computerChoice
};


// Define object for winning combinations.
const winningCombinations = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spok'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spok'],
    spok: ['rock', 'scissors']
};


// Define constant object for possible outcomes of the game.
const GAME_OUTCOME = {
    TIE: 'Tie',
    PLAYER_WIN: 'Player',
    COMPUTER_WIN: 'Computer'
};


// Determine the winner based on player and computer selections.
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return GAME_OUTCOME.TIE;
    } else if (winningCombinations[playerSelection].includes(computerSelection)) {
        return GAME_OUTCOME.PLAYER_WIN;
    } else {
        return GAME_OUTCOME.COMPUTER_WIN;
    }
};


// Get and validate the user's weapon choice.
function getPlayerChoice() {
    let isValidInput = false;
    while (isValidInput === false) {
        const playerChoice = prompt("Select your weapon: ");
        if (playerChoice === null) {
            continue;
        } else {
            const playerChoiceInLower = playerChoice.toLowerCase();
            if (weaponOptions.includes(playerChoiceInLower)) {
                isValidInput = true;
                return playerChoiceInLower;
            };
        }
    };
};


// Create a function that simulates a single round of the game.
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result === GAME_OUTCOME.TIE) {
        return "It's a tie!"
    } else if (result === GAME_OUTCOME.PLAYER_WIN) {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
};


// Intialize player and computer scores.
function initliazeScores() {
    return {
        player: 0,
        computer: 0
    };
};


// Function to loop through game.
function playGameRounds(numberOfRounds) {
    let scores = initliazeScores();

    for (let i = 0; i < numberOfRounds; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const winner = checkWinner(playerSelection, computerSelection); 
        
        console.log(playRound(playerSelection, computerSelection));
        
        if (winner === 'Player') {
            scores.player++;
        } else if (winner === 'Computer') {
            scores.computer++;
        }
    };

    return scores;
};


// Display the final outcome of the game based on player and computer scores.
function displayFinalOutcome(scores) {
    if (scores.player > scores.computer) {
        finalOutcome.textContent = "Game Over. You have beaten the computer.";
    } else if (scores.computer > scores.player) {
        finalOutcome.textContent = "Game Over. You got beaten by the computer.";
    } else {
        finalOutcome.textContent = "Game Over. We have a tie! Play another game round to settle the tie.";
    }
};


// Function to play 5 rounds of the game.
function game(){
    const numberOfRounds = 5;
    const scores = playGameRounds(numberOfRounds);
    displayFinalOutcome(scores);
};


game()