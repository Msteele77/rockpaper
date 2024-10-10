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


function playGame () {
//takes the computer choice and human choice
function playRound (computerSelection, humanSelection) {
    //console.log(computerScore++);
    if (computerSelection === humanSelection) {
        console.log("You Tied! Try Again!");
    } 
    else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose. Rock beats scissors.")
        computerScore = computerScore +1;
        console.log(computerScore);
        
    }   
    else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose. Scissors beats paper.")
        computerScore = computerScore +1;
        console.log(computerScore);
    }   
    else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose. Rock beats paper.")
        computerScore = computerScore +1;
        console.log(computerScore);
    }   
    else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You Win! Rock beats scissors.")
        humanScore = humanScore + 1;
        console.log(humanScore);
    }   
    else if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper beats rocks.")
        humanScore = humanScore + 1;
        console.log(humanScore);
    }   
    else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors beats paper.")
        humanScore = humanScore +1;
        console.log(humanScore);
    }
}
for (let i = 0; i < 5; i++) {
playRound(computerChoice, humanChoice);
}
}
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;


playGame();