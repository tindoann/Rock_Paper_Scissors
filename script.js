let playerOneThrows = ''
let playerTwoThrows = ''

const playerOneClickedRock = () => {
  //   - remember that player one threw rock
  playerOneThrows = 'rock'

  // Find the section with the class Player-One
  let playerOneSection = document.querySelector('.Player-One')
  // add the class name 'hidden' so it goes away
  playerOneSection.classList.toggle('hidden')

  whoWon()
}

const playerOneClickedPaper = () => {
  playerOneThrows = 'paper'
  whoWon()

  // Find the section with the class Player-One
  let playerOneSection = document.querySelector('.Player-One')
  // add the class name 'hidden' so it goes away
  playerOneSection.classList.toggle('hidden')
}

const playerOneClickedScissors = () => {
  playerOneThrows = 'scissors'
  whoWon()

  // Find the section with the class Player-One
  let playerOneSection = document.querySelector('.Player-One')
  // add the class name 'hidden' so it goes away
  playerOneSection.classList.toggle('hidden')
}

const playerTwoClickedRock = () => {
  //   - remember that player Two threw rock
  playerTwoThrows = 'rock'
  whoWon()

  // Find the section with the class Player-Two
  let playerTwoSection = document.querySelector('.Player-Two')
  // add the class name 'hidden' so it goes away
  playerTwoSection.classList.toggle('hidden')
}

const playerTwoClickedPaper = () => {
  playerTwoThrows = 'paper'
  whoWon()

  // Find the section with the class Player-Two
  let playerTwoSection = document.querySelector('.Player-Two')
  // add the class name 'hidden' so it goes away
  playerTwoSection.classList.toggle('hidden')
}

const playerTwoClickedScissors = () => {
  playerTwoThrows = 'scissors'
  whoWon()

  // Find the section with the class Player-Two
  let playerTwoSection = document.querySelector('.Player-Two')
  // add the class name 'hidden' so it goes away
  playerTwoSection.classList.toggle('hidden')
}

const whoWon = () => {
  let winner = ''

  //   Player One      Player Two         Winner
  //   paper           rock               One
  if (playerOneThrows === 'paper' && playerTwoThrows === 'rock') {
    winner = 'Player One Wins!'
  }

  //   paper           paper              Tie
  if (playerOneThrows === 'paper' && playerTwoThrows === 'paper') {
    winner = "It's a Tie!"
  }

  //   paper           scissors           Two
  if (playerOneThrows === 'paper' && playerTwoThrows === 'scissors') {
    winner = 'Player Two Wins!'
  }
  //   rock            rock               Tie
  if (playerOneThrows === 'rock' && playerTwoThrows === 'rock') {
    winner = "It's a Tie!"
  }
  //   rock            paper              Two
  if (playerOneThrows === 'rock' && playerTwoThrows === 'paper') {
    winner = 'Player Two Wins!'
  }
  //   rock            scissors           One
  if (playerOneThrows === 'rock' && playerTwoThrows === 'scissors') {
    winner = 'Player One Wins!'
  }
  //   scissors        rock               Two
  if (playerOneThrows === 'scissors' && playerTwoThrows === 'rock') {
    winner = 'Player Two Wins!'
  }
  //   scissors        paper              One
  if (playerOneThrows === 'scissors' && playerTwoThrows === 'paper') {
    winner = 'Player One Wins!'
  }
  //   scissors        scissors           Tie
  if (playerOneThrows === 'scissors' && playerTwoThrows === 'scissors') {
    winner = "It's a Tie!"
  }

  // Update the screen to show who is the winner
  // Find the H1
  let header = document.querySelector('h2')

  // Change the text of the H1 to say who the winner is
  header.textContent = winner
}

const main = () => {
  // Player One
  // - find player one rock

  // - add a click event listener for a function that does:
  let playerOneRockButton = document.querySelector('.Player-One  .rock')
  playerOneRockButton.addEventListener('click', playerOneClickedRock)

  let playerOnePaperButton = document.querySelector('.Player-One  .paper')
  playerOnePaperButton.addEventListener('click', playerOneClickedPaper)

  let playerOneScissorsButton = document.querySelector('.Player-One  .scissors')
  playerOneScissorsButton.addEventListener('click', playerOneClickedScissors)

  let playerTwoRockButton = document.querySelector('.Player-Two  .rock')
  playerTwoRockButton.addEventListener('click', playerTwoClickedRock)

  let playerTwoPaperButton = document.querySelector('.Player-Two  .paper')
  playerTwoPaperButton.addEventListener('click', playerTwoClickedPaper)

  let playerTwoScissorsButton = document.querySelector('.Player-Two  .scissors')
  playerTwoScissorsButton.addEventListener('click', playerTwoClickedScissors)

  // - find player one paper
  // - add a click event listener for a function that does:
  //   - remember that player one threw paper
  // - clicks on scissors
  //   - remember that player one threw scissors
  // Player two
  // - clicks on rock
  //   - remember that player two threw rock
  // - clicks on paper
  // - clicks on scissors
}

document.addEventListener('DOMContentLoaded', main)