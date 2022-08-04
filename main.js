const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * rps.length)];
}
