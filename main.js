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
  let wins = checkWins();
  if(wins>=5){
    return;
  }
  const computerselection = getComputerChoice();
  const winner = checkWinner(playerselection, computerselection);
  winners.push(winner);
  document.querySelector('.player-selection').textContent = `Player: ${playerselection}`;
  document.querySelector('.computer-selection').textContent = `Computer: ${computerselection}`; 
  displayWins();

  wins = checkWins();
  if(wins == 5){
    displayWinner();
  }
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

function checkWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;

  return Math.max(playerWins,computerWins);
}

function displayWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "tie").length;

  document.querySelector('.player-wins').textContent = `Player Won: ${playerWins} times`;
  document.querySelector('.computer-wins').textContent = `Computer Won: ${computerWins} times`;
  document.querySelector('.ties').textContent = `Ties: ${ties} times`;
}

function displayWinner(){
  let playerWins = winners.filter((item) => item == "Player").length;

  if(playerWins == 5){
    document.querySelector('.winner').textContent = "You won 5 times!!"
  }else{
    document.querySelector('.winner').textContent = "Computer won 5 times!!"
  }
}

game();
