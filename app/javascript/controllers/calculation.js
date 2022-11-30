let score = 0;
let validation = false;

export function checkScore(){

  // where the player has put his tiles
  let word = document.querySelectorAll(".game-table-body .current-word");
  let checkWord = '';

  // get the "word" from the tiles
  word.forEach(element => {
    checkWord += element.innerText[0];
    score += Number(element.innerText[3]);
  });

  function check(){
    // check if the word exist
    checkValidWord(checkWord);

    // remove border from the tile in the table
    removeBorder(word);
  }

  check();
};

  let scoreBoredP1 = document.querySelector(".score-p1");
  let scoreBoredP2 = document.querySelector(".score-p2");

function updateScoreBored(playerNum, score){

  console.log(playerNum);
  console.log(Number(scoreBoredP1.innerText));

  scoreBoredP1.innerText = Number(scoreBoredP1.innerText) + score;

}


function removeBorder(word){
  console.log(word);
  word.forEach( element => {
    element.classList.remove("current-word");
  })
}


// true or false
async function checkValidWord(searchWord){

  let res = await fetch(`https://wagon-dictionary.herokuapp.com/${searchWord}`);
  let data = await res.json();
  validation = await data.found;

  scoreCheck(searchWord);

    // .then(response => response.json())
    // .then(data => {
    //   validation =  data.found;
    //   console.log("validation22 is");
    //   console.log(data.found);
    // });
}


function scoreCheck(word){
  if(validation) {
    // score for the length of the word

    if (score <= 5){
      alert(`You got ${score} points. You can do better.`);
    }else{
      alert(`You got ${score} points! Well done!`);
    }
    updateScoreBored(1, score);

    } else {
      alert("The word doesn't exist..");
      score = 0;
    }

    // reset score
    score = 0;
}
