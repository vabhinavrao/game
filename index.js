const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore=0;
let computerScore=0;


function resetGame(){
    playerScore=0;
    computerScore=0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "PLAYER : ";
    computerDisplay.textContent = "COMPUTER : ";
    resultDisplay.textContent = "Result";
    resultDisplay.classList.remove("greenText", "redText", "suiText");
}
function shareScoreOnTwitter() {
    const playerScore = document.getElementById("playerScoreDisplay").innerText;
    const computerScore = document.getElementById("computerScoreDisplay").innerText;
    const tweetText = "I scored " + playerScore + " points against the computer's " + computerScore + " points in the Rock-Paper-Scissors game! #GameScore";

    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText);

    window.open(tweetUrl);
}
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
