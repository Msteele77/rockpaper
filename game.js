var humanScore = 0;
var computerScore = 0;


//randomly selects a choice for computer
function getComputerChoice () { 
    options = ["rock", "paper", "scissors"]
    computerChoice = options[Math.floor(Math.random()*options.length)]
    console.log(computerChoice);
}

getComputerChoice();


//prompts user to enter their choice
function getHumanChoice () {
    humanChoice = prompt("Enter your choice")
    console.log(humanChoice);
}

getHumanChoice();

//takes the computer choice and human choice
function playRound (computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        console.log("You Tied! Try Again!");
    } 
    if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose. Rock beats scissors.")
    }   
    if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose. Scissors beats paper.")
    }   
    if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose. Rock beats paper.")
    }   
    if (computerSelection === "scissors" && humanSelection === "rocks") {
        console.log("You Win! Rock beats scissors.")
    }   
    if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper beats rocks.")
    }   
    if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors beats paper.")
    }   
}
    
playRound(computerChoice, humanChoice);
    


