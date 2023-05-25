function getComputerChoice() {
let randomChoice = Math.floor(Math.random() * 3) + 1;
if (randomChoice === 1) {
    return "paper"
} else if (randomChoice === 2) {
    return "scissors"
} else {
    return "rock"
}
}

//console.log(getComputerChoice())

function getPlayerChoice() {
    let choice = prompt("Please enter your choice")
    return choice
}

//console.log(getPlayerChoice())

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both played ${computerSelection}. You draw.`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return `You played ${playerSelection} and the computer played ${computerSelection}. You win!!!`
    } else {
        return `You played ${playerSelection} and the computer played ${computerSelection}. You lose.`
    }
}

console.log(playRound(playerSelection, computerSelection))