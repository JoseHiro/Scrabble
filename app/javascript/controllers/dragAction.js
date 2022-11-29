
const app = require("../application");

export function dragOverTable(e){
  e.preventDefault();
}

export function dragEnterTable(){
  // console.log("hello");
  // this.classList.add("current-word");
}

export function dragLeaveTable(){
  // this.classList.remove("selected");
}

export function dragDropTable(){
  this.classList.add("current-word");
  app.currentTile.innerHTML = '';
  this.innerHTML = app.draggingLetter;
  this.classList.remove("selected");
}
