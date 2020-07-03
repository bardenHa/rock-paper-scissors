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

let playerSelection = ((prompt("Rock, Paper or Scissors?:")).toLowerCase())


function game() {
    let computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}


