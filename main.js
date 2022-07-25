let score = {
  player: 0,
  computer: 0,
};

let rank = {
  1: "paper",
  2: "scissors",
  3: "rock",
};

function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  return rank[randInt];
}

function playRound(playerSelection) {
  // if (playerSelection >= 1 && playerSelection <= 3) {
  let computerSelection = getComputerChoice();
  // if (playerSelection > computerSelection) {
  //   score.player += 1;
  // } else if (playerSelection < computerSelection) {
  //   score.computer += 1;
  // } else if (playerSelection === computerSelection) {
  //   score.player += 1;
  //   score.computer += 1;
  // }
  // console.log(
  //   `Player: ${rank[playerSelection]} <<>> Computer: ${rank[computerSelection]}`
  // );
  // return score;

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      score.player += 1;
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
}
