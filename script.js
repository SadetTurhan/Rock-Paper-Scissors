function game(){
  for (let i = 0; i < 5; i++){
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randnum = getRandomInt(3);

function getComputerChoice(){
  if(randnum == 1){
    return "scissors"
  }else if(randnum == 2){
    return "rock"
  }else{
    return "paper"
  };
};
console.log(getComputerChoice());

let getUserChoice = prompt();


function playRound(getComputerChoice,getUserChoice){
  if(getUserChoice == "rock" && getComputerChoice == "scissors"){
    console.log("User Wins!");
  }else if(getUserChoice == "paper" && getComputerChoice == "rock"){
    console.log("User Wins");
  }else if(getUserChoice == "scissors" && getComputerChoice == "paper"){
    console.log("User Wins");
  }else if(getUserChoice == getComputerChoice){
    console.log("Draw")
  }else{
    console.log("Computer Wins");
  }
};

playRound(getComputerChoice(),getUserChoice);
}};

game();
