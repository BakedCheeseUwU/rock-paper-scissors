const rps = ["rock", "paper", "scissors"];
const winners = [];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function getPlayerChoice() {
  let choice = prompt("Type Rock,Paper or Scissors");
  choice = choice.toLowerCase();
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound() { 
  const computerselection = getComputerChoice();
  const playerselection = getPlayerChoice();
  console.log("Player Choice: ",playerselection);
  console.log("Computer Choice: ",computerselection);
  const winner = checkWinner(playerselection, computerselection);
  console.log("Outcome of The Round: ",winner);
  winners.push(winner);
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
    console.log("-----------------------------------")
  }
  logWinners();
}

function logWinners() {
  let playerWins = winners.filter((item) => item == "Player");
  let computerWins = winners.filter((item) => item == "Computer");
  let ties = winners.filter((item) => item == "tie");
  console.log("------------------------------------");
  console.log("Results:");
  console.log("Player Wins: ", playerWins.length);
  console.log("Computer Wins: ", computerWins.length);
  console.log("Ties: ", ties.length);
}

game();
