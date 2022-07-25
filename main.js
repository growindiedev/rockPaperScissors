let score = {
  player: 0,
  computer: 0,
};

let rank = {
  1: "paper",
  2: "scissors",
  3: "rock",
};

let gameCount = 0;
// first to score 5 points win

function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  return rank[randInt];
}

function playRound(playerSelection) {
  if (gameCount < 5) {
    gameCount++;
    if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        score.player += 1;
        //could be an alert
        return "paper wins";
      } else {
        if (computerSelection === "scissors") {
          score.computer += 1;
          return "scissors wins";
        }
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        score.computer += 1;
        return "rock wins";
      } else {
        if (computerSelection === "paper") {
          score.player += 1;
          return "scissors wins";
        }
      }
    }
    if (playerSelection === "rock") {
      if (computerSelection == "scissors") {
        score.player += 1;
        return "rock wins";
      } else {
        if (computerSelection === "paper") {
          score.computer += 1;
          return "paper wins";
        }
      }
    }
  } else {
    // return the winner with max wins
    gameCount = 0;
    score.player = 0;
    score.computer = 0;
  }

  let computerSelection = getComputerChoice();
}
