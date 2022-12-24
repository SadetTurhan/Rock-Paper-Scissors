let userscore = 0;
let compscore = 0;
let getUserChoice = [];
let ComputerChoice = [];
function game(){

function getComputerChoice(){
  function getRandomInt(max){
    return Math.floor(Math.random() * max);
  }
  
  var randnum = getRandomInt(3);
  if(randnum == 1){
    ComputerChoice.pop();
    ComputerChoice.push("scissors");
  }else if(randnum == 2){
    ComputerChoice.pop();
    ComputerChoice.push("rock");
  }else{
    ComputerChoice.pop();
    ComputerChoice.push("paper");
  };
};

let rockchoice = document.getElementById("rock");
rockchoice.addEventListener("click",function(){
  getUserChoice.pop();
  getUserChoice.push("rock");
  playRound(getComputerChoice(),getUserChoice);
  refreshscore();
});
let paperchoice = document.getElementById("paper");
paperchoice.addEventListener("click",function(){
  getUserChoice.pop();
  getUserChoice.push("paper");
  playRound(getComputerChoice(),getUserChoice);
  refreshscore();
});
let scissorschoice = document.getElementById("scissors");
scissorschoice.addEventListener("click",function(){
  getUserChoice.pop();
  getUserChoice.push("scissors");
  playRound(getComputerChoice(),getUserChoice);
  refreshscore();
});


function playRound(getComputerChoice,getUserChoice){
  if(getUserChoice == "rock" && ComputerChoice == "scissors"){
    userscore += 1;
  }else if(getUserChoice == "paper" && ComputerChoice == "rock"){
    userscore += 1;
  }else if(getUserChoice == "scissors" && ComputerChoice == "paper"){
    userscore += 1;
  }else if(getUserChoice == ComputerChoice){
    console.log("Draw");
  }else{
    compscore += 1;
  }
  const resetButton = document.getElementById("reset");
 
  resetButton.addEventListener("click",resetScore);
  
};

const computerchoice = document.getElementById("cscore");
const forcompchoice = document.createElement("div");
computerchoice.appendChild(forcompchoice);
forcompchoice.innerText = 0;
const userchoice = document.getElementById("score");
const foruserchoice = document.createElement("div");
foruserchoice.innerText = 0;
userchoice.appendChild(foruserchoice);
const liveScore = document.getElementById("liveScore");
const forLiveScore = document.createElement("div");
liveScore.innerText = "Start!";
liveScore.appendChild(forLiveScore);

function refreshscore(){
  foruserchoice.innerText = userscore;
  forcompchoice.innerText = compscore;
  };
  function resetScore(){
    userscore = 0;
    compscore = 0;
    foruserchoice.innerText = 0;
    forcompchoice.innerText = 0;
  }
};

game();
