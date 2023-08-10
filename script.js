const weaponOptions = ['rock', 'paper', 'scissors', 'lizard', 'spok'];

// create function that will randomise weaponOptions everytime function is called
function getComputerChoice(){
    const computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
    return computerChoice
};