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
};

const computerchoice = document.getElementById("cscore");
const forcompchoice = document.createElement("div");
computerchoice.appendChild(forcompchoice);

const userchoice = document.getElementById("score");
const foruserchoice = document.createElement("div");
userchoice.appendChild(foruserchoice);

function refreshscore(){
foruserchoice.innerText = userscore;
forcompchoice.innerText = compscore;
};
};

game();
