//Rock Paper Scissors Game

//variables for keeping track of points;

let pCounter = 0;
let cCounter = 0;

//define a function for computer choice

function getComputerChoice(){
    const randomChoice = ['rock', 'paper', 'scissors'];
    let randomNum = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return randomNum;
}
// getComputerChoice();

//write a function that plays a single round of rock paper scissors!

function PlayRound (computerChoice, playerChoice){
    if(computerChoice == 'rock' && playerChoice == 'scissors'){
        alert('Computer Wins! Rock beats scissors');
        return ++cCounter;
    }
    else if (computerChoice == 'rock' && playerChoice == 'paper'){
        alert('Player Wins! Paper beats rock');
        return ++pCounter;
    }
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        alert('Computer Wins! Paper beats rock');
        return ++cCounter;
    }
    else if (computerChoice == 'paper' && playerChoice == 'scissors'){
        alert('Player Wins! Scissors beats paper');
        return ++pCounter;
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        alert('Computer Won! Scissors beat paper');
        return ++cCounter;
    }
    else if (computerChoice == 'scissors' && playerChoice == 'rock'){
        alert('Player Won! Rock beats scissors');
        return ++pCounter;
    }
    else if(computerChoice == playerChoice){
        alert('draw');
    }
    else{
        alert('incorrect value');
    }
};


function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt('Enter rock, paper or scissors!');
        // ends the loop if the player hits enter
        if (playerChoice == null){
            end;
        }
        let computerChoice = getComputerChoice();
        console.log(PlayRound(playerChoice, computerChoice));
    }

    //checks to see who wins after the loops ends

    if (cCounter == pCounter){
        alert('We have a Draw Match');
    }
    else if (cCounter > pCounter){
        alert('Computer Wins with: ' + cCounter + ' points!');
    }
    else if (cCounter < pCounter){
        alert('Player Wins with: ' + pCounter + ' points!');
    }
}
game();


