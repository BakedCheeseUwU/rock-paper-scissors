const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function getPlayerChoice() {
  let choice = prompt("Type Rock,Paper or Scissors");
  choice = choice.toLowerCase();
  return choice;
}

const computerselection = getComputerChoice();
const playerselection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "You Won!!";
  } else {
    return "Computer Won!!";
  }
}

// console.log(playRound(playerselection,computerselection));