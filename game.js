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


function playRound(playerSelection){
    computerSelection=getComputerChoice();
    // console.log("Computer Selection:",computerSelection);
    const allowedValues = new Set(["rock","paper","scissors"]);

    if (!allowedValues.has(playerSelection)){
        alert("Incorrect choice, try again");
    }
    if (playerSelection==computerSelection){
        return "draw";
    }
    else if (playerSelection=="rock"){
        if(computerSelection=="paper"){
            return "computerwin";
        }
        else{
            return "playerwin";
        }
    }
    else if (playerSelection=="paper"){
        if(computerSelection=="scissors"){
            return "computerwin";
        }
        else{
            return "playerwin";
        }
    }
    else if (playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "computerwin";
        }
        else{
            return "playerwin";
        }
    }
}

function messageLog(e,playerscore,computerscore,message){
    const content = document.createElement('div');

    for(let i=0; i<container.children.length;i++){
        container.children[i].style.opacity=1/(i+2);
    }

    content.textContent = `You chose ${e.target.id} - 
     PC chose ${computerSelection} -
     you ${message}!`;
    container.prepend(content);
}


function game(){
    const body = document.querySelector('body');
    const container = document.createElement("div");
    container.setAttribute('id','container');
    body.append(container);
    const btn =  document.querySelector('#btn');
    // const container =  document.querySelector('#container');
    document.querySelector('#rock').textContent = "Rock";
    document.querySelector('#paper').textContent = "Paper";
    document.querySelector('#scissors').textContent = "Scissors";

    message = "";
    let round = 1;
    let playerscore = 0;
    let computerscore = 0;
    let Maxscore = 5;
    
    btn.addEventListener('click', function clickhandler(e) {

        if (["rock","paper","scissors"].includes(e.target.id)){  
            let result = playRound(e.target.id);
            if (result=="playerwin"){
                playerscore++;
                message = "Won";
            }
            else if (result=="computerwin"){
                computerscore++;
                message = "Lost";
            }
            else{
                message = "Drew";
            }        
            if (playerscore==Maxscore||computerscore==Maxscore){
                btn.removeEventListener('click', clickhandler);
                rematch(playerscore,computerscore,container);
            }
            messageLog(e,playerscore,computerscore,message);
            document.querySelector('#playerscoreoutput').textContent = playerscore;
            document.querySelector('#computerscoreoutput').textContent = computerscore;
            document.querySelector('#rounda').textContent = round;
            document.querySelector('#playertitle').textContent = "Player";
            document.querySelector('#computertitle').textContent = "Computer";
            document.querySelector('#roundtitle').textContent = "Round";
            console.log("round", round, "playerscore",playerscore,"compuerscore", computerscore);
            round++;
        }
    });

}

function rematch(playerscore,computerscore,container){
    if(playerscore==5){
        document.querySelector('#paper').textContent = "WON";
    }
    else if(computerscore==5){
        document.querySelector('#paper').textContent = "LOST";
    }
    document.querySelector('#rock').textContent = "YOU";
    document.querySelector('#scissors').textContent = "Click here to play again";

    const btn =  document.querySelector('#btn');
    btn.addEventListener('click', function clickhandler(e) {
        if (e.target.id=='scissors'){
            container.remove();
            document.querySelector('#playerscoreoutput').textContent = "0";
            document.querySelector('#computerscoreoutput').textContent = "0";
            document.querySelector('#rounda').textContent = "1";
            btn.removeEventListener('click', clickhandler);
            game();
        }
    });
}

game();