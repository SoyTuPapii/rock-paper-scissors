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
    let humanChoice = prompt("Will you choose rock, paper, or scissors?")
    return humanChoice
}

  let computerChoice = getComputerChoice()
  let humanChoice = getHumanChoice()
  console.log(computerChoice)
  console.log(humanChoice)

  let computerScore = 0
  let humanScore = 0