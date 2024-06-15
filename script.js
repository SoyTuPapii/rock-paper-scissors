function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 1)  {
    return "rock"
  }
  else if (randomInt === 2)  {
    return "paper"
  }
  else {
    return "scissors"
  }
}

function getHumanChoice() {
    let choice = prompt("Will you choose rock, paper, or scissors?")
    return choice
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie!")
        }
        else if (computerSelection === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else {
            console.log("You win! Rock smashes scissors.")
            humanScore++
        }
    
    }
    else if (humanSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
            console.log("It's a tie!");
        }
        else if (computerSelection === "scissors") {
            console.log("You lose! Scissors cuts paper.");
            computerScore++;
        }
        else {
            console.log("You win! Paper covers rock.")
            humanScore++
        }
    }
    else if (humanSelection.toLowerCase() === "scissors") {
        if (computerSelection === "scissors") {
            console.log("It's a tie!");
        }
        else if (computerSelection === "rock") {
            console.log("You lose! Rock smashes scissors.");
            computerScore++;
        }
        else {
            console.log("You win! Scissors cuts paper.")
            humanScore++
        }
    }
}

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()
console.log(computerSelection)
console.log(humanSelection)

let computerScore = 0
let humanScore = 0
playRound(humanSelection, computerSelection)