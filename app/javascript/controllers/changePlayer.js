const app = require("../application");
let currentPlayer = document.querySelector(".current-player");

export function changeTurn(){
  // get new tile
  newTiles();
  if (Number(currentPlayer .innerHTML) == 2){
    alert("Player1's turn");
    currentPlayer.innerHTML = 1;

  }else if(Number(currentPlayer .innerHTML) == 1){

    alert("Player2's turn");
    currentPlayer.innerHTML = 2;
  }
}

export function passTurn(){
  if (Number(currentPlayer .innerHTML) == 2){
    alert("Player1's turn");
    currentPlayer.innerHTML = 1;

  }else if(Number(currentPlayer .innerHTML) == 1){

    alert("Player2's turn");
    currentPlayer.innerHTML = 2;
  }
}


function newTiles(){

  // player 1 get new tiles
  if (Number(currentPlayer .innerHTML) == 1){
    let playerTable1 = document.querySelectorAll(".player1-table td");
    playerTable1.forEach((tile)=>{
    // console.log(tile.innerText);
    if(tile.innerText ==''){
      let chosenLetter = (app.randomAlphabet(app.alphabets));
      let insertP1 = `<p class="tile-score">${app.alphabets[chosenLetter][1]}</p>`;
      tile.innerText = chosenLetter;
      tile.innerHTML += insertP1
    }
    })
   // player 2 get new tiles
  }else if(Number(currentPlayer .innerHTML) == 2){
    let playerTable2 = document.querySelectorAll(".player2-table td");
    playerTable2.forEach((tile)=>{
    // console.log(tile.innerText);
    if(tile.innerText ==''){
      let chosenLetter = (app.randomAlphabet(app.alphabets));
      let insertP1 = `<p class="tile-score">${app.alphabets[chosenLetter][1]}</p>`;
      tile.innerText = chosenLetter;
      tile.innerHTML += insertP1
    }
    });
  }


}


export function shuffle(){
  console.log("hello");

    if (Number(currentPlayer .innerHTML) == 1){

    let playerTable1 = document.querySelectorAll(".player1-table td");
    playerTable1.forEach((tile)=>{
    // console.log(tile.innerText);
      let chosenLetter = (app.randomAlphabet(app.alphabets));
      let insertP1 = `<p class="tile-score">${app.alphabets[chosenLetter][1]}</p>`;
      tile.innerText = chosenLetter;
      tile.innerHTML += insertP1
    })
   // player 2 get new tiles
  }else if(Number(currentPlayer .innerHTML) == 2){
    let playerTable2 = document.querySelectorAll(".player2-table td");
    playerTable2.forEach((tile)=>{
    // console.log(tile.innerText);
      let chosenLetter = (app.randomAlphabet(app.alphabets));
      let insertP1 = `<p class="tile-score">${app.alphabets[chosenLetter][1]}</p>`;
      tile.innerText = chosenLetter;
      tile.innerHTML += insertP1
    });
  }
}



//get all letters from the player table
// function getAllTiles(){

// }


// function checkWhosTurn(){

// }
