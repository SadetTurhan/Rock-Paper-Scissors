//user and computer scores
var userScore = 0;
var computerScore = 0;
let computerChoice = [];
let userChoice = [];

//scoreboard matching
var userScoreArea = document.getElementById("user-score-area");
var computerScoreArea = document.getElementById("computer-score-area");
function changeScoreTable(){
  userScoreArea.innerHTML = `<p>${userScore}</p>`;
  computerScoreArea.innerHTML = `<p>${computerScore}</p>`;
}

//get choice functions
function getComputerChoice(){
  var computerNumber = Math.floor(Math.random() * 3);
  if(computerNumber == 0){
    computerChoice.unshift("rock")
  }else if(computerNumber == 1){
    computerChoice.unshift("paper")
  }else{
    computerChoice.unshift("scissors")
  }
}
  function getRock(){
    userChoice.unshift("rock")
  }
  function getPaper(){
    userChoice.unshift("paper")
  }
  function getScissors(){
    userChoice.unshift("scissors")
  }
//game rounds
function round(){
  getComputerChoice()
  if(userChoice[0] == "rock" && computerChoice[0] == "scissors"){
    userScore += 1;
    changeScoreTable()
  }else if(userChoice[0] == "paper" && computerChoice[0] == "rock"){
    userScore += 1;
    changeScoreTable()
  }else if(userChoice[0] == "scissors" && computerChoice[0] == "paper"){
    userScore += 1;
    changeScoreTable()
  }else if(userChoice[0] == computerChoice[0]){
    console.log("draw")
  }else{
    computerScore += 1;
    changeScoreTable()
  }
}
///button selectors
let rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click",getRock);
rockButton.addEventListener("click",round);
let paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click",getPaper);
paperButton.addEventListener("click",round);
let scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener("click",getScissors)
scissorsButton.addEventListener("click",round)
