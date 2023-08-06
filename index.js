let result = "";

let Score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };    /*default operator  5>6 || 4  */
UpdatedScore();


function pickComputerMove() {
  let randomNum = Math.random();
  if (randomNum >= 0 && randomNum <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {

  const computerMove = pickComputerMove();

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }

  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }

  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }

  }
  if (result ==="You win."){
    Score.wins+=1;
  }else if (result ==="You lose."){
    Score.loses+=1;
  } else if (result ==="Tie."){
    Score.ties+=1;
  }
  localStorage.setItem('score', JSON.stringify(Score));

  UpdatedScore();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `You <img src="./img/${playerMove}-emoji.png" height="50"> - <img src="./img/${computerMove}-emoji.png" height="50"> Computer `;
  
  
}

function UpdatedScore () {
  const updatedScore = document.querySelector('.js-score-button');
  updatedScore.innerHTML = `Wins: ${Score.wins}, Loses: ${Score.loses}, Ties: ${Score.ties}.`;
}

function allReset() {
  document.querySelector('.js-result').innerHTML = null;

  document.querySelector('.js-move').innerHTML = null;
}