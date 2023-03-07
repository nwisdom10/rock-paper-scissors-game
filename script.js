//Rock Paper Scissors Game

//variables for keeping track of points;

let pCounter = 0;
let cCounter = 0;


//displays counters at 0 and connects each of their designated nodes

const playerScoreNode = document.querySelector('.player-score-node');
playerScoreNode.innerHTML = pCounter;
const computerScoreNode = document.querySelector('.computer-score-node');
computerScoreNode.innerHTML = cCounter;

//node conenction for displaying status of who is winning
const gameMessage = document.querySelector('.message');

const choosePaper = document.querySelector('.choosePaper');
choosePaper.addEventListener('click', () => {
    playerChoice = 'paper';
    game();
});


const chooseRock = document.querySelector('.chooseRock');
chooseRock.addEventListener('click', () => {
    playerChoice = 'rock';
    game();
    
});

const chooseScissors = document.querySelector('.chooseScissors');
chooseScissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    game();
});



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
        gameMessage.innerHTML = ('Computer Wins! Rock beats scissors');
        ++cCounter;
        computerScoreNode.innerHTML = cCounter;

    }
    else if (computerChoice == 'rock' && playerChoice == 'paper'){
        gameMessage.innerHTML = ('Player Wins! Paper beats rock');
        ++pCounter;
        playerScoreNode.innerHTML = pCounter;
        

    }
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        gameMessage.innerHTML = ('Computer Wins! Paper beats rock');
        ++cCounter;
        computerScoreNode.innerHTML = cCounter;
        
    }
    else if (computerChoice == 'paper' && playerChoice == 'scissors'){
        gameMessage.innerHTML = ('Player Wins! Scissors beats paper');
        ++pCounter;
        playerScoreNode.innerHTML = pCounter;
        
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        gameMessage.innerHTML = ('Computer Won! Scissors beat paper');
        ++cCounter;
        computerScoreNode.innerHTML = cCounter;
        
        
    }
    else if (computerChoice == 'scissors' && playerChoice == 'rock'){
        gameMessage.innerHTML = ('Player Won! Rock beats scissors');
        ++pCounter;
        playerScoreNode.innerHTML = pCounter;
        
    }
    else if(computerChoice == playerChoice){
        gameMessage.innerHTML = ('We have a Draw');
        console.log('There are no points to add');
    }
    else{
        console.log('incorrect value');
    }
};


function game(){
    let computerChoice = getComputerChoice();
    console.log(PlayRound(computerChoice, playerChoice));

    
    if (cCounter == 3){
        gameMessage.innerHTML = ('We have a winner! Computer');
        cCounter = 0;
        computerScoreNode.innerHTML = cCounter;
        pCounter = 0;
        playerScoreNode.innerHTML = pCounter;
    }
    else if (pCounter == 3){
        gameMessage.innerHTML = ('We have a winner! Player!');
        pCounter = 0;
        playerScoreNode.innerHTML = pCounter;
        cCounter = 0;
        computerScoreNode.innerHTML = cCounter;
    }
};


