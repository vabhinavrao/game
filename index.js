const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playGame(PlayerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(PlayerChoice, computerChoice);
    let result ="" ;

    if(PlayerChoice===computerChoice){
        result= "It's a TIE!";
    }
    else{
        switch(PlayerChoice){
            case "rock":
                result = (computerChoice === "scissors" )? "You WIN!" : "You LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN!" : "You LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN!" : "You LOSE!";
                break;
        }
    } 
    playerDisplay.textContent = "PLAYER : "+PlayerChoice;
    computerDisplay.textContent = "COMPUTER : "+computerChoice;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText", "suiText");

    
    switch(result){
        case "You WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++; 
            playerScoreDisplay.textContent = playerScore;  
            break;  
        case "You LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a TIE!":
            resultDisplay.classList.add("suiText");
            playerScore++;   
            computerScore++;
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            break;
    }




}

