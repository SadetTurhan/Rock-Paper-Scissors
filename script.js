function computer_play(max) {
    let result = Math.floor(Math.random() * max);
    if (result == 0){
        return "rock";
    }else if(result == 1){
        return "paper";
    }else{
        return "scissors";
    }
  }
  
function player_play(){
    var choice = prompt();
}

function game(computer_play,player_play){
    let result = Math.floor(Math.random() * 3);
    var choice = prompt();
    if (result == "rock" && choice == "scissors"){
        console.log("computer wins");
    }else if(result == "scissors" && choice == "paper"){
        console.log("computer wins");
    }else if(result == "paper" && choice == "rock"){
        console.log("computer wins");
    }else if(result === choice){
        console.log("Tie");
    }else{
        console.log("player wins");
    }
}

console.log(game(computer_play()))