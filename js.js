function getComputerChoice() {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let result = Math.floor(Math.random() * (max - min) + min);
    if (result==0){
        return "rock";
    }
    else if (result==1){
        return "paper";
    }
    else return "scissors";
}


function playRound(playerSelection, computerSelection) {
    const allowedValues = new Set(["rock","paper","scissors"]);

    if (!allowedValues.has(playerSelection)){
        alert("Incorrect choice, try again");
        // return "draw";
    }
    if (playerSelection==computerSelection){
        alert("Draw!");
        return "draw";
    }
    else if (playerSelection=="rock"){
        if(computerSelection=="paper"){
            alert("You Lose! Paper beats Rock");
            return "computerwin";
        }
        else{
            alert("You Win! Rock beats Scissors");
            return "playerwin";
        }
    }
    else if (playerSelection=="paper"){
        if(computerSelection=="scissors"){
            alert("You Lose! Scissors beats Paper");
            return "computerwin";
        }
        else{
            alert("You Win! Paper beats Rock");
            return "playerwin";
        }
    }
    else if (playerSelection=="scissors"){
        if(computerSelection=="rock"){
            alert("You Lose! Rock beats Scissors");
            return "computerwin";
        }
        else{
            alert("You Win! Scissors beats Paper");
            return "playerwin";
        }
    }
}

  function game(){
    let playerscore = 0;
    let computerscore = 0;
    let round = 1;
    while (round<=5){
        let computer = getComputerChoice()
        // console.log(computer);
        let result = playRound((prompt("Rock, Paper, Scissors?")).toLowerCase(),computer);
        if (result=="playerwin"){
            playerscore++;
            console.log("Round:",round,"Players Score -",playerscore,"Computerscore -",computerscore);
            round++;
        }
        else if (result=="computerwin"){
            computerscore++;
            console.log("Round:",round,"Players Score -",playerscore,"Computerscore -",computerscore);
            round++;
        }
        else if (result=="draw")
        {
            console.log("Round:",round,"Players Score -",playerscore,"Computerscore -",computerscore);
            round++;
        }
    }
    if (playerscore==computerscore){
        console.log("The game is a draw");
    }
    else if (playerscore > computerscore){
        console.log("You Win!");
    }
    else{
        console.log("You Lose!");
    }
  }
  game();