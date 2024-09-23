function getComputerChoice () { 
    options = ["rock", "paper", "scissors"]
    result = options[Math.floor(Math.random()*options.length)]
    console.log(result);
}

getComputerChoice();



function getHumanChoice () {
    var humanChoice = window.prompt("Enter your defense")
    console.log(humanChoice);
}

getHumanChoice();

