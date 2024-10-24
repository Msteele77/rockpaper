
let rounds = 5;
let humanScore = 0;
let computerScore = 0;


//randomly generates computer choice
function getComputerChoice () { 
    options = ["rock", "paper", "scissors"]
    computerChoice = options[Math.floor(Math.random()*options.length)]
    console.log(computerChoice); 
}

getComputerChoice();

//prompts user to enter their choice
function getHumanChoice () {
    humanChoice = prompt("Enter your choice")
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
}

getHumanChoice();

//rock paper scissors game

  
function playGame() {
function playRound (computerSelection, humanSelection) {
    //console.log(computerScore++);
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
}

for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice;
    const computerSelection = getComputerChoice;
    playRound(computerChoice, humanChoice);
    
}


console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);
}



playGame();
//playGame();