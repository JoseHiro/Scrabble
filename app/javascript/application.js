// Entry point for the build script in your package.json
import { add } from "@hotwired/stimulus";
import "@hotwired/turbo-rails"
import "./controllers"
import { checkScore } from "./controllers/calculation";
import { changeTurn } from "./controllers/changePlayer";
const dragEvents = require("./controllers/dragAction");

// window.addEventListener('load', function(){

// alphabets, amount and score

let alphabets = {
  "A" : [9, 1], "B" : [2, 3], "C" : [1, 3], "D" : [4, 1], "E" : [12, 1],
  "F" : [2, 4], "G" : [3, 1], "H" : [2, 4], "I" : [9, 1], "J" : [1, 8],
  "K" : [1, 5], "L" : [4, 1], "M" : [2, 3], "N" : [6, 1], "O" : [8, 1],
  "P" : [2, 3], "Q" : [1, 10], "R" : [6, 1], "S" : [4, 1], "T" : [6, 1],
  "U" : [4, 1], "V" : [2, 4], "W" : [2, 4], "X" : [1, 8], "Y" : [2, 4],
  "Z" : [1, 10]
}

// get all field as array
let field = document.querySelectorAll(".game-table-body tr td");
let eachFieldLine = [];
let insertArray = [];

for(let i = 0; i < field.length; i++){
  insertArray.push(field[i]);
  if( i % 14 == 0 && i != 0 ){
    eachFieldLine.push(insertArray);
    insertArray = [];
  }
}

// player table
let playerTable1 = document.querySelectorAll(".player1-table td");
let playerTable2 = document.querySelectorAll(".player2-table td");
let randomKeyP1 = [];
let randomKeyP2 = [];

// ----------------------------------------------------

// generate list of alphabts
function randomAlphabet(obj){
  const keys = Object.keys(obj)
  return keys[Math.floor(Math.random() * keys.length)];
};

// player start random alpha array
for(let i = 0; i < 8; i++){
  let alphabetP1 = randomAlphabet(alphabets)
  randomKeyP1.push(alphabetP1);
  let insertP1 = `<p class="tile-score">${alphabets[alphabetP1][1]}</p>`;
  playerTable1[i].innerText = randomKeyP1[i];
  playerTable1[i].innerHTML += insertP1;


  let alphabetP2 = randomAlphabet(alphabets)
  randomKeyP2.push(alphabetP2);
  let insertP2 = `<p class="tile-score">${alphabets[alphabetP2][1]}</p>`;
  playerTable2[i].innerText = randomKeyP2[i];
  playerTable2[i].innerHTML += insertP2;
}

for(let i = 0; i < eachFieldLine.length; i++){
  for(let d = 0; d < eachFieldLine[i].length; d++){
    eachFieldLine[i][d].addEventListener("dragenter", dragEvents.dragEnterTable);
    eachFieldLine[i][d].addEventListener("dragover", dragEvents.dragOverTable);
    eachFieldLine[i][d].addEventListener("dragleave", dragEvents.dragLeaveTable);
    eachFieldLine[i][d].addEventListener("drop", dragEvents.dragDropTable);
  }
}

// add event for each key in the player table
playerTable1.forEach((key) => {
  key.addEventListener("dragstart", dragStart);
  key.addEventListener("dragend", dragEnd);
  key.addEventListener("dragenter", dragEnter);
  key.addEventListener("dragover", dragOver);
  key.addEventListener("dragleave", dragLeave);
  key.addEventListener("drop", dragDrop);
});

playerTable2.forEach((key) => {
  key.addEventListener("dragstart", dragStart);
  key.addEventListener("dragend", dragEnd);
  key.addEventListener("dragenter", dragEnter)
  key.addEventListener("dragover", dragOver)
  key.addEventListener("dragleave", dragLeave)
  key.addEventListener("drop", dragDrop)
});

export let draggingLetter = "";
export let currentTile = "";

function dragStart(){
  draggingLetter = this.innerHTML;
  currentTile = this;
  this.classList.add("selected");
}

function dragEnd(){
  this.classList.remove("selected");
}

function dragOver(e){
  e.preventDefault();
}

function dragEnter(){
  this.classList.add("selected");
}

function dragLeave(){
  this.classList.remove("selected");
}

function dragDrop(){
  currentTile.innerHTML = this.innerHTML;
  this.innerHTML = draggingLetter;
  this.classList.remove("selected");
}

// checkScore
let confirmBtn = document.querySelector("#confirm-btn");
confirmBtn.addEventListener('click', checkScore);
confirmBtn.addEventListener('click', changeTurn);


// confirmBtn.addEventListener('click', () => {

//   let answer = confirm("Are you sure?");
//       if (answer){

//         console.log("hello");
//         // get new tile
//         changeTurn;
//       }
// });
