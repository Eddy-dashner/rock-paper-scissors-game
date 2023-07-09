function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    } else {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice, computerChoice);
            console.log(result);
        });
    });
}

game();
