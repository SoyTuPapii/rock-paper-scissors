  // Your JavaScript goes here!
  console.log("Hello, World!")
  function getComputerChoice() {
      let randomInt = Math.floor(Math.random() * 10);
      console.log(randomInt)
      return randomInt
  }
  let computerChoice = getComputerChoice()
  console.log(computerChoice)