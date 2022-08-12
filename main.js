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

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player Won";
  } else {
    return "Computer Won";
  }
}

function playRound() {
  const winner = checkWinner(playerselection, computerselection);
  console.log(winner);
}

function game() {
  playRound();
}

game();