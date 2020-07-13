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

rockButton.addEventListener('click', () => {
    roundOutcome = (playRound('rock', computerPlay()));
    console.log(roundOutcome);
    let resultsList = document.createElement('li');
    resultsList.textContent = roundOutcome;
    resultsUnorderedList.appendChild(resultsList);
})

paperButton.addEventListener('click', () => {
    roundOutcome = (playRound('paper', computerPlay()));
    console.log(roundOutcome);
    let resultsList = document.createElement('li');
    resultsList.textContent = roundOutcome;
    resultsUnorderedList.appendChild(resultsList);
})

scissorsButton.addEventListener('click', () => {
    roundOutcome = (playRound('scissors', computerPlay()));
    console.log(roundOutcome);
    let resultsList = document.createElement('li');
    resultsList.textContent = roundOutcome;
    resultsUnorderedList.appendChild(resultsList);
})

function game() {
    let i;
    let playerRoundsWon = 0;
    let computerRoundsWon = 0;

    for (i=0; i<5; i++) {
        let playerSelection = ((prompt("Rock, Paper or Scissors?:")).toLowerCase())
        let computerSelection = computerPlay()
        let roundOutcome = playRound(playerSelection, computerSelection)
        

        if (roundOutcome.includes("win")) {
            playerRoundsWon++;
        }
        else if (roundOutcome.includes("lose")) {
            computerRoundsWon++;
        }
        else {
            i--;
        }

        console.log("")
        console.log(roundOutcome)
        console.log(`The score is ${playerRoundsWon}:${computerRoundsWon}`)
    }

    playerRoundsWon > computerRoundsWon ? console.log("You won the game!") : console.log("You lost the game!");
}



