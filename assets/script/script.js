//assign global variables
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
//function that displays what you pressed onto the page, gives the computer a random answer and displays that to the page
function displayMessage(buttonPressed) {
    document.getElementById("your-selection").innerHTML = "You clicked: " + buttonPressed;
    let randomArray = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * randomArray.length);
    let randomResult = randomArray[randomNumber];
    document.getElementById("computer-selection").innerHTML = "The computer picked: " + randomResult;
    if ((randomResult == "rock" && buttonPressed == "rock") || (randomResult == "paper" && buttonPressed == "paper") || (randomResult == "scissors" && buttonPressed == "scissors")) {
        answer = "tied";
        displayWinnerMessage(answer);
        results(answer);
    }
    else if ((randomResult == "rock" && buttonPressed == "paper") || (randomResult == "paper" && buttonPressed == "scissors") || (randomResult == "scissors" && buttonPressed == "rock")) {
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
//function using if statements to calculate total wins, ties, and losses and displays to the screen
function results(answer) {

    if (answer == "won") {
        won++;
       document.getElementById("result-won").innerHTML = won + " Wins";
    }
    else if (answer == "tied") {
        tied++;
        document.getElementById("result-tied").innerHTML = tied + " Ties";
    }
    else {
        lost++;
        document.getElementById("result-loss").innerHTML = lost + " Losses";
    }
}