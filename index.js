let gameChoice = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return gameChoice[Math.floor(Math.random() * 3)];
}