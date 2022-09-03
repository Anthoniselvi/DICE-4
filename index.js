let player1Score = 0
let player2Score = 0
let player3Score = 0
let player4Score = 0

let player1Turn = true
let player2Turn = false
let player3Turn = false
let player4Turn = false

const player1Dice = document.getElementById("currentScore1")
const player2Dice = document.getElementById("currentScore2")
const player3Dice = document.getElementById("currentScore3")
const player4Dice = document.getElementById("currentScore4")

const player1TotalScore = document.getElementById("totalScore1")
const player2TotalScore = document.getElementById("totalScore2")
const player3TotalScore = document.getElementById("totalScore3")
const player4TotalScore = document.getElementById("totalScore4")

const player1Box = document.getElementById("player1")
const player2Box = document.getElementById("player2")
const player3Box = document.getElementById("player3")
const player4Box = document.getElementById("player4")

const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener ('click', function(){
    const randomNumber = Math.floor (Math.random()*6)+1

    if (player1Turn === true){
        player1Score += randomNumber
        player1TotalScore.textContent = player1Score
        player1Dice.textContent = randomNumber
        player2Dice.textContent = "-"
        player3Dice.textContent = "-"
        player4Dice.textContent = "-"
        player1Box.classList.remove("active")
        player2Box.classList.add("active")
                
        player1Turn = false;
        player2Turn = true;
    }
    else if (player2Turn === true){
        player2Score += randomNumber
        player2TotalScore.textContent = player2Score
        player2Dice.textContent = randomNumber
        player1Dice.textContent = "-"
        player3Dice.textContent = "-"
        player4Dice.textContent = "-"
        player2Box.classList.remove("active")
        player3Box.classList.add("active")
                
        player2Turn = false;
        player3Turn = true;
    }
    else if (player3Turn === true){
        player3Score += randomNumber
        player3TotalScore.textContent = player3Score
        player3Dice.textContent = randomNumber
        player1Dice.textContent = "-"
        player2Dice.textContent = "-"
        player4Dice.textContent = "-"
        player3Box.classList.remove("active")
        player4Box.classList.add("active")
               
        player3Turn = false;
        player4Turn = true;
    }
    else if (player4Turn === true){
        player4Score += randomNumber
        player4TotalScore.textContent = player4Score
        player4Dice.textContent = randomNumber
        player1Dice.textContent = "-"
        player2Dice.textContent = "-"
        player3Dice.textContent = "-"
        player4Box.classList.remove("active")
        player1Box.classList.add("active")
        
        player4Turn = false;
        player1Turn = true;
    }

    if (player1Score >= 20){
        message.textContent = "Player 1 Won 🏆 👍"
        player1Box.classList.add("active")
        player2Box.classList.remove("active")
        showResetButton()
    } else if (player2Score >=20){
        message.textContent = "Player 2 Won 🏆 👍"
        player2Box.classList.add("active")
        player3Box.classList.remove("active")
        showResetButton()
    } else if (player3Score >=20){
        message.textContent = "Player 3 Won 🏆 👍"
        player3Box.classList.add("active")
        player4Box.classList.remove("active")
        showResetButton()
    } else if (player4Score >=20){
        message.textContent = "Player 4 Won 🏆 👍"
        player4Box.classList.add("active")
        player1Box.classList.remove("active")
        showResetButton()
    }
})


resetBtn.addEventListener('click', function(){
    reset()
})


function reset(){
    player1Score = 0
    player2Score = 0
    player3Score = 0
    player4Score = 0

    player1TotalScore.textContent = 0
    player2TotalScore.textContent = 0
    player3TotalScore.textContent = 0
    player4TotalScore.textContent = 0

    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player3Dice.textContent = "-"
    player4Dice.textContent = "-"
       
        message.textContent = ""
        resetBtn.style.display = "none"
        rollBtn.style.display = "block"
        player1Box.classList.add("active")
        player2Box.classList.remove("active")
        player3Box.classList.remove("active")
        player4Box.classList.remove("active")
}