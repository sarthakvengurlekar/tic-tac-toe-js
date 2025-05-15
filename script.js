let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice(){
    let max = 3;
    let a = Math.floor(Math.random() * max);
    let compChoice = undefined;
    switch(a) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice =  "Paper";
            break;
        case 2:
            compChoice = "Scissor";
            break;
        default:
            compChoice = undefined;
    }
    return compChoice;
}

function getHumanChoice(){
    let humanChoice = prompt(`Enter "Rock", "Paper" or "Scissor"`);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){

    console.log("Human: " + humanChoice);
    console.log("Computer: " + computerChoice);

    if(humanChoice == "rock" && computerChoice == "Paper"){
        console.log("Computer wins! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "Scissor"){
        console.log("You win! Rock beats Scissor");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "Rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "Scissor"){
        console.log("Computer wins! Scissor beats paper");
        computerScore++;
    }
    else if(humanChoice == "scissor" && computerChoice == "Paper"){
        console.log("You win! Scissor beats Paper");
        humanScore++;
    }
    else if(humanChoice == "scissor" && computerChoice == "Rock"){
        console.log("Computer wins! Rock beats Scissor");
        computerScore++;
    }
    else if(humanChoice == computerChoice.toLowerCase()){
        console.log("It's a draw!");
    }
}
function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log("You win!, your score: " + humanScore + " computer score: " + computerScore);
    }
    else if(humanScore < computerScore){
        console.log("You lose!, your score: " + humanScore + " computer score: " + computerScore);
    }else{
        console.log("It's a draw!, your score: " + humanScore + " computer score: " + computerScore);
    }
}



