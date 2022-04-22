// Dom items
const playerName = document.getElementById('playerName')
const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissor = document.getElementById('playerScissor')
const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissor = document.getElementById('computerScissor')
const winsText = document.getElementById('winsText')
const aTieText = document.getElementById('aTieText')
const loosesText = document.getElementById('loosesText')

//Variables
let wins = 0
let looses = 0
let aTie = 0
var announcement = document.getElementById('announcement')

let playerNameString = prompt('What is your name ?')
playerName.innerText = playerNameString

// Rock = 0
// Paper = 1
// Scissor = 2
//Function to make game work, take player choice between 0 a 2
function rtsGame(playerChoice){

    //Select a random number between 0 a 2
    computerChoice = Math.random() * 3
    computerChoice = Math.floor(computerChoice)

    //Player Wincondition
    if (playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1){
        wins ++
        winsText.innerText = lessThanTen(wins)
        announcement.innerText = `${playerNameString} WON!`
    }
    // A tie condition
    else if (playerChoice == computerChoice){
        aTie ++
        aTieText.innerText = lessThanTen(aTie)
        announcement.innerText = `TIE!`
    }
    // Computer wincondition
    else{
        looses ++
        loosesText.innerText = lessThanTen(looses)
        announcement.innerText = `COMPIUTER WON`
    }

    //Switch made to change the color of the chosen button based on the player's choice
    switch (playerChoice){
        case '0':
            playerRock.style.backgroundColor = '#122544'
            playerPaper.style.backgroundColor = '#4285f4'
            playerScissor.style.backgroundColor = '#4285f4'
            break
        case '1':
            playerPaper.style.backgroundColor = '#122544'
            playerRock.style.backgroundColor = '#4285f4'
            playerScissor.style.backgroundColor = '#4285f4'
            break
        case '2':
            playerScissor.style.backgroundColor = '#122544'
            playerRock.style.backgroundColor = '#4285f4'
            playerPaper.style.backgroundColor = '#4285f4'
            break
    }
    //Switch made to change the color of the chosen button based on the computer's choice
    switch (computerChoice){
        case 0:
            computerRock.style.backgroundColor = '#7a2b24'
            computerPaper.style.backgroundColor = '#db4437'
            computerScissor.style.backgroundColor = '#db4437'
            break
        case 1:
            computerPaper.style.backgroundColor = '#7a2b24'
            computerRock.style.backgroundColor = '#db4437'
            computerScissor.style.backgroundColor = '#db4437'
            break
        case 2:
            computerScissor.style.backgroundColor = '#7a2b24'
            computerPaper.style.backgroundColor = '#db4437'
            computerRock.style.backgroundColor = '#db4437'
            break
    }
}
//Function to change scoreboard number case < 10
function lessThanTen(number){
    if (number < 10){
        return '0' + number
    }
    return number
}