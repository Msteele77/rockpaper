let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"]

//randomly generates computer choice
function getComputerChoice () {   
    computerChoice = options[Math.floor(Math.random()*options.length)]
    console.log("Computer Choice: " + computerChoice); 
}

//prompts user to enter their choice
function getHumanChoice () {
    humanChoice = prompt("Enter your choice")
    humanChoice = humanChoice.toLowerCase();
    console.log("Human Choice: " + humanChoice);
}

//rock paper scissors round
function playRound (computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
            console.log("You Tied! Try Again!");
    } 
    if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose. Rock beats scissors.")
        computerScore = computerScore +1;
    }   
    if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose. Scissors beats paper.")
        computerScore = computerScore +1;
    }   
    if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose. Rock beats paper.")
        computerScore = computerScore +1;
    }   
    if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You Win! Rock beats scissors.")
        humanScore = humanScore + 1;
    }   
    if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper beats rocks.")
        humanScore = humanScore + 1;
    }   
    if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors beats paper.")
        humanScore = humanScore +1;
    }
    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
}

//rock paper scissors full game played five times & gives result & scores
function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerChoice, humanChoice); 
    }
    if (humanScore > computerScore) {
        console.log("You won the game. Your Score: " + humanScore + " & Computer Score: " + computerScore)
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game. Your Score: " + humanScore + " & Computer Score: " + computerScore)
    }
    else {
        console.log("You tied. Your Score ${humanScore} & Computer Score: ${computerScore}")
    }
}

playGame();
