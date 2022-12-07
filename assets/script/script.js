let won = 0;
let tied = 0;
let lost = 0;

//runs a function when the rock button is clicked
const rockEl = document.getElementById("rock-button");
rockEl.addEventListener("click", rockPressed);

//runs a function when the paper button is clicked
const paperEl = document.getElementById("paper-button");
paperEl.addEventListener("click", paperPressed);

//runs a function when the scissors button is clicked
const scissorsEl = document.getElementById("scissors-button");
scissorsEl.addEventListener("click", scissorsPressed);

//the funtion that runs when rock is pressed
function rockPressed(){
    console.log ("rock");
    displayMessage("rock")
}

//the funtion that runs when paper is pressed
function paperPressed(){
    console.log ("paper");
    displayMessage("paper")
}

//the funtion that runs when scissors is pressed
function scissorsPressed(){
    console.log ("scissors");
    displayMessage("scissors")
}
//function that displays what you pressed onto the page and calls the random function
function displayMessage(buttonPressed){
    document.getElementById("your-selection").innerHTML = "You clicked: " + buttonPressed;
    randomize(buttonPressed);
} 

//function that displays what computer randomly picked onto the page
function displayComputerMessage(computerPicked, userSelected){
    document.getElementById("computer-selection").innerHTML = "The computer picked: " + computerPicked;
    whoWon(computerPicked, userSelected);
} 
//function that displays if you won, tied or lost
function displayWinnerMessage(winner){
    document.getElementById("game-result").innerHTML = "You " + winner + " !";
    
} 
//function that displays total results of wins
function displaywinResults(result){
    document.getElementById("result-won").innerHTML = result + " Wins";
}
//function that displays total results of ties
function displaytieResults(result){
    document.getElementById("result-tied").innerHTML = result + " Ties";
}
//function that displays total results of losses
function displaylossResults(result){
    document.getElementById("result-loss").innerHTML = result + " Losses";
}
//funtion to act as computer player - picks randomly between 3 options
function randomize(userSelected){
    let randomArray = ["rock","paper","scissors"];
    let randomNumber = Math.floor(Math.random() * randomArray.length);
    console.log (randomNumber);
    let randomResult = randomArray[randomNumber];
    console.log(randomResult);
    displayComputerMessage(randomResult, userSelected);
}
//function to figure out who won the individual games
function whoWon(computerPicked,userSelected){
    if ((computerPicked == "rock" && userSelected == "rock")||(computerPicked == "paper" && userSelected == "paper" )||(computerPicked == "scissors" && userSelected == "scissors")) {
        answer = "tied";
        console.log(answer);
        displayWinnerMessage(answer);
        results(answer);
    }
    else if ((computerPicked == "rock" && userSelected == "paper")||(computerPicked == "paper" && userSelected == "scissors")||(computerPicked == "scissors" && userSelected == "rock")){
        answer="won";
        console.log(answer);
        displayWinnerMessage(answer);
        results(answer);
    }
    else{
        answer="lost";
        console.log(answer);
        displayWinnerMessage(answer);
        results(answer);
    }
}
//fucntion using if statements to calculate total wins, ties, and losses
function results(answer){
if (answer == "won"){
    won = won + 1;
    console.log("won " + won);
    displaywinResults(won);
}
else if (answer == "tied") {
    tied = tied +1;
    console.log("tied " + tied);
    displaytieResults(tied);
}
else{
    lost=lost+1;
    console.log("lost " + lost);
    displaylossResults(lost);
}
}

