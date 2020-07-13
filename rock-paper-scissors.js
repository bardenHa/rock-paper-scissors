let gameChoice = ["rock", "paper", "scissors"];

function computerPlay() {
    return gameChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection + computerSelection) {
        case ("rockpaper"):
            return ("You lose! Paper beats Rock");
            break;
        case ("rockscissors"):
            return ("You win! Rock beats Scissors");
            break;
        case ("paperscissors"):
            return ("You lose! Scissors beat Paper");
            break;
        case ("paperrock"):
            return ("You win! Paper beats Rock");
            break;
        case ("scissorsrock"):
            return ("You lose! Rock beats Scissors");
            break;
        case ("scissorspaper"):
            return ("You win! Scissors beat Paper");
            break;
        default:
            return ("It's a draw!");
    } 

}


const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const resultsUnorderedList = document.querySelector('#results-list'); 

let score = document.querySelector('#score');
let playerRoundsWon = 0;
let computerRoundsWon = 0;

rockButton.addEventListener('click', () => {
    game('rock');
})

paperButton.addEventListener('click', () => {
    game('paper');
})

scissorsButton.addEventListener('click', () => {
    game('scissors');
})

function game(choice) {

    roundOutcome = (playRound(choice, computerPlay()));
    console.log(roundOutcome);
    let resultsList = document.createElement('li');
    resultsList.classList.add('results');
    resultsList.textContent = roundOutcome;
    resultsUnorderedList.appendChild(resultsList);
    
    if (roundOutcome.includes("win")) {
        playerRoundsWon++;
    }
    else if (roundOutcome.includes("lose")) {
        computerRoundsWon++;
    }

    if (playerRoundsWon >= 5 || computerRoundsWon >=5) {
        playerRoundsWon > computerRoundsWon ? score.textContent = ("You won the game!") : score.textContent = ("You lost the game!");
        let deletedList = document.getElementsByClassName('results');

        while (resultsUnorderedList.firstChild) {
            resultsUnorderedList.removeChild(resultsUnorderedList.lastChild);
        }

        playerRoundsWon = 0;
        computerRoundsWon = 0;
    }
    
    if (playerRoundsWon > 0 || computerRoundsWon > 0) {
        score.textContent = (`${playerRoundsWon} : ${computerRoundsWon}`);
    }
    }



