const rps = ["rock", "paper", "scissors"];
const winners = [];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * rps.length)];
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

function playRound(playerselection){
  const computerselection = getComputerChoice();
  const winner = checkWinner(playerselection, computerselection);
  // winners.push(winner);
  console.log(playerselection);
  console.log(computerselection);
  console.log(winner);
}

function game() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => { 
    button.addEventListener('click',function (){
      playRound(this.textContent.toLowerCase());
    });
  });
}

function logWinners() {
  let playerWins = winners.filter((item) => item == "Player");
  let computerWins = winners.filter((item) => item == "Computer");
  let ties = winners.filter((item) => item == "tie");
}

game();
