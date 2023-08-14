const weaponOptions = ['rock', 'paper', 'scissors', 'lizard', 'spok'];

const resultMessage = document.getElementById('result-message');
const finalOutcome = document.getElementById('final-outcome');
const buttons = document.querySelectorAll('.weapon-button');

function getComputerChoice() {
    const computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
    return computerChoice;
}

const winningCombinations = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spok'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spok'],
    spok: ['rock', 'scissors']
};

const GAME_OUTCOME = {
    TIE: 'Tie',
    PLAYER_WIN: 'Player',
    COMPUTER_WIN: 'Computer'
};

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return GAME_OUTCOME.TIE;
    } else if (winningCombinations[playerSelection].includes(computerSelection)) {
        return GAME_OUTCOME.PLAYER_WIN;
    } else {
        return GAME_OUTCOME.COMPUTER_WIN;
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result === GAME_OUTCOME.TIE) {
        return resultMessage.textContent = "It's a tie!";
    } else if (result === GAME_OUTCOME.PLAYER_WIN) {
        return resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function initliazeScores() {
    return {
        player: 0,
        computer: 0
    };
}

function playGameRounds(numberOfRounds) {
    let scores = initliazeScores();

    for (let i = 0; i < numberOfRounds; i++) {
        buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const playerSelection = event.target.id;
            const computerSelection = getComputerChoice();
            const winner = checkWinner(playerSelection, computerSelection);

            console.log(playRound(playerSelection, computerSelection));

            if (winner === 'Player') {
                scores.player++;
            } else if (winner === 'Computer') {
                scores.computer++;
            }
        });
    });
    return scores;
    };

}

function displayFinalOutcome(scores) {
    if (scores.player > scores.computer) {
        finalOutcome.textContent = "Game Over. You have beaten the computer.";
    } else if (scores.computer > scores.player) {
        finalOutcome.textContent = "Game Over. You got beaten by the computer.";
    } else {
        finalOutcome.textContent = "Game Over. We have a tie! Play another game round to settle the tie.";
    }
}

function game() {
    const numberOfRounds = 5;
    playGameRounds(numberOfRounds);
}

game();
