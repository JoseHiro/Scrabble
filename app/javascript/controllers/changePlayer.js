// const app = require("../application");

let playerDisplay = document.querySelector(".current-player");

export function changeTurn(){
  // console.log("connect");
  if (Number(playerDisplay.innerHTML) == 0){
    alert("Player1's turn");
    playerDisplay.innerHTML = 1;

  }else if(Number(playerDisplay.innerHTML) == 1){

    alert("Player2's turn");
    playerDisplay.innerHTML = 0;
  }
}
