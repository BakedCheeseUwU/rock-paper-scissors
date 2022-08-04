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