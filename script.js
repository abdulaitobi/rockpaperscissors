const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
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

rock.addEventListener('click', playRound('rock', getComputerChoice()));
paper.addEventListener('click', playRound('paper', getComputerChoice()));
scissors.addEventListener('click', playRound('scissors', getComputerChoice()));

function playRound(playerChoice, computerSelection){
    console.log(playerChoice);
    console.log(computerSelection);

    const playerVal = document.createElement('p');
    const compVal = document.createElement('p');
    playerChoiceDisplay.appendChild(playerVal);
    playerVal.textContent = playerChoice;
    computerChoiceDisplay.appendChild(compVal);
    compVal.textContent = computerSelection;

    if((playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"))
    {
        score = -1;
    }
    if((playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"))
    {
        score = 1;
    }
    if(playerChoice.toLowerCase() === computerSelection.toLowerCase()){

    }

    while (!(playercount || compcount) == 5) {
        if(score == 1)
        {
            playercount++;
        }
        else if(score == -1)
        {
            compcount++;
        }
    }
    if(playercount > compcount)
    {
        alert("You win " + playercount + " - " + compcount);
    }
    else if(compcount > playercount)
    {
        alert("You lose " + compcount + " - " + playercount);
    }
}


