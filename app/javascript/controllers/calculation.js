
let score = 0;
let validation = false;

export function checkScore(){
  // console.log("OK");
  let word = document.querySelectorAll(".game-table-body .current-word");
  let checkWord = '';

  word.forEach(element => {
    checkWord += element.innerText[0];
    score += Number(element.innerText[3]);
  });

    // check word order and if the word exist/
    // console.log(checkWord)
    //console.log(checkValidWord("checkWord"));
  let isValid = checkValidWord(checkWord)

    // setTimeout(startCheck(checkWord), 3000);


  if(isValid) {
    // score for the length of the word
    score += word.length;
    if (score <= 5){
      alert('You got ${score} points. You can do better.');
    }else{
      alert('You got ${score} points! Well done!');
    }
    updateScoreBored(1, score);

  } else {
    alert("The word doesn't exist..");
    score = 0;
  }

  console.log("score is");
  console.log(score);
  removeBorder(word);

};

  let scoreBoredP1 = document.querySelector(".score-p1");
  let scoreBoredP2 = document.querySelector(".score-p2");

function updateScoreBored(playerNum, score){
  // check which player
  // if (playerNum = 1){

  // }

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


// let url = "https://wagon-dictionary.herokuapp.com/";

function checkValidWord(searchWord){

  // console.log(searchWord);
  fetch(`https://wagon-dictionary.herokuapp.com/${searchWord}`)
    .then(response => response.json())
    .then(data => {
      // console.log("data found is ");
      // console.log(data.found);
      // validation = data.found;
      return data.found;
    });
}


function startCheck(){

}
