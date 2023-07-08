function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Test the getComputerChoice function
var computerChoice = getComputerChoice();
console.log(computerChoice);
function playRound(playerSelection, computerSelection) {
    var playerChoice = playerSelection.toLowerCase();
    var computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    } else {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
}
// Test the playRound function
var playerChoice = "Rock";
// var computerChoice = getComputerChoice();
var result = playRound(playerChoice, computerChoice);
console.log(result);