const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const scores = document.getElementById('scores');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const scoreMessage = document.createElement('p');
var playercount = 0;
var compcount = 0;
var score = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let val = "";
    if (num == 0) {
        val = "Rock";
    }
    else if (num == 1) {
        val = "Paper";
    }
    else{
        val = "Scissors";
    }

    return val;
}

function playRound(playerChoice, computerSelection){
    const playerVal = document.createElement('p');
    const compVal = document.createElement('p');
    playerChoiceDisplay.appendChild(playerVal);
    playerVal.textContent = playerChoice;
    computerChoiceDisplay.appendChild(compVal);
    compVal.textContent = computerSelection;

    if (playercount === 5 || compcount === 5) {
        playerVal.style.display = 'none';
        compVal.style.display = 'none';
    }
    if((playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"))
    {
        scoreMessage.textContent = "\nYou lose " + computerSelection + " beats " + playerChoice;
        scores.appendChild(scoreMessage);
        score = -1;
    }
    if((playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"))
    {
        scoreMessage.textContent = "\nYou win " + playerChoice + " beats " + computerSelection;
        scores.appendChild(scoreMessage);
        score = 1;
    }
    if(playerChoice.toLowerCase() === computerSelection.toLowerCase()){
        scoreMessage.textContent = "\nIts a Draw";
        scores.appendChild(scoreMessage);
        return;
    }
    if (!(playercount === 5 || compcount === 5)) {
        updateScore(score);
    }
}

function updateScore(value) {
    
    if(value === 1)
    {
        playercount++;
        playerScore.textContent = playercount;
    }
    else if(value === -1)
    {
        compcount++;
        compScore.textContent = compcount;
    }
}

rock.addEventListener('click', function() {playRound('rock', getComputerChoice()); checkGameStatus();});
paper.addEventListener('click', function() {playRound('paper', getComputerChoice()); checkGameStatus();});
scissors.addEventListener('click', function() {playRound('scissors', getComputerChoice()); checkGameStatus();});


function checkGameStatus(){
    if (playercount === 5 || compcount === 5) {
        if(playercount > compcount)
        {
            scoreMessage.textContent = "You Win! Refresh to play again";
            scores.appendChild(scoreMessage);
        }
        else if(compcount > playercount)
        {
            scoreMessage.textContent = "You Lose! Refresh to play again";
            scores.appendChild(scoreMessage);
        }
    }
}


