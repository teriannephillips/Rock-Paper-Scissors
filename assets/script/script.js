//declared global variables
let won = 0;
let tied = 0;
let lost = 0;
//runs a function to display the rock answer when the rock button is clicked
const rockEl = document.getElementById("rock-button");
rockEl.addEventListener("click", function() {
    displayMessage("rock")
});
//runs a function to display the paper answer when the paper button is clicked
const paperEl = document.getElementById("paper-button");
paperEl.addEventListener("click", function() {
    displayMessage("paper")
});
//runs a function to display the scissors answer when the scissors button is clicked
const scissorsEl = document.getElementById("scissors-button");
scissorsEl.addEventListener("click", function() {
    displayMessage("scissors")
});
//function that displays what you pressed onto the page and calls the random function
function displayMessage(buttonPressed) {
    document.getElementById("your-selection").innerHTML = "You clicked: " + buttonPressed;
    randomize(buttonPressed);
}
//function that displays what computer randomly picked onto the page
function displayComputerMessage(computerPicked, userSelected) {
    document.getElementById("computer-selection").innerHTML = "The computer picked: " + computerPicked;
    //whoWon(computerPicked, userSelected);
    if ((computerPicked == "rock" && userSelected == "rock") || (computerPicked == "paper" && userSelected == "paper") || (computerPicked == "scissors" && userSelected == "scissors")) {
        answer = "tied";
        displayWinnerMessage(answer);
        results(answer);
    }
    else if ((computerPicked == "rock" && userSelected == "paper") || (computerPicked == "paper" && userSelected == "scissors") || (computerPicked == "scissors" && userSelected == "rock")) {
        answer = "won";
        displayWinnerMessage(answer);
        results(answer);
    }
    else {
        answer = "lost";
        displayWinnerMessage(answer);
        results(answer);
    }
}
//function that displays if you won, tied or lost
function displayWinnerMessage(winner) {
    document.getElementById("game-result").innerHTML = "You " + winner + " !";
}
//function that displays total results of wins
function displaywinResults(result) {
    document.getElementById("result-won").innerHTML = result + " Wins";
}
//function that displays total results of ties
function displaytieResults(result) {
    document.getElementById("result-tied").innerHTML = result + " Ties";
}
//function that displays total results of losses
function displaylossResults(result) {
    document.getElementById("result-loss").innerHTML = result + " Losses";
}
//funtion to act as computer player - picks randomly between 3 options
function randomize(userSelected) {
    let randomArray = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * randomArray.length);
    let randomResult = randomArray[randomNumber];
    displayComputerMessage(randomResult, userSelected);
}
//function to figure out who won the individual games
//function whoWon(computerPicked, userSelected) {
   
//function using if statements to calculate total wins, ties, and losses
function results(answer) {
    if (answer == "won") {
        won = won + 1;
        displaywinResults(won);
    }
    else if (answer == "tied") {
        tied = tied + 1;
        displaytieResults(tied);
    }
    else {
        lost = lost + 1;
        displaylossResults(lost);
    }
}