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
    console.log(computerSelection, humanSelection)
    }
    
playRound(computerChoice, humanChoice);
    


