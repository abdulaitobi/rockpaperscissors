
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
    console.log(playerChoice);
    console.log(computerSelection);
    if((playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"))
    {
        return -1;
    }
    if((playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"))
    {
        return 1;
    }
    if(playerChoice.toLowerCase() === computerSelection.toLowerCase()){
        console.log("Its a tie, play again");
        return (playRound(prompt("Type Rock, Paper, or Scissors"), getComputerChoice()));
    }
}

function game(){
    var playercount = 0;
    var compcount = 0;
    for (let index = 0; index < 5; index++) {
        player = prompt("Type Rock, Paper, or Scissors");
        computer = getComputerChoice();
        var result = playRound(player, computer);
        if(result == 1)
        {
            playercount++;
        }
        else if(result == -1)
        {
            compcount++;
        }
    }
    if(playercount > compcount)
    {
        console.log("You win " + playercount + " - " + compcount);
    }
    else if(compcount > playercount)
    {
        console.log("You lose " + compcount + " - " + playercount);
    }
    
}

