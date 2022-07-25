let score = {
  player: 0,
  computer: 0,
};

let rank = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

let symbols = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

let gameCount = 0;
// first to score 5 points win

function checkFinalScore(max) {
  // if (score.player > 5 || score.computer > 5) {
  //   let max = Math.max(score.player, score.computer);
  if (score.player === max) {
    alert("player wins");
    document.querySelector("#computer-hand").innerText = "?";
    document.querySelector("#player-hand").innerText = "?";
    score.player = 0;
    score.computer = 0;
    document.querySelector("#player-score").innerText = score.player;
    document.querySelector("#computer-score").innerText = score.computer;
  } else if (score.computer === max) {
    alert("computer wins");
    document.querySelector("#computer-hand").innerText = "?";
    document.querySelector("#player-hand").innerText = "?";
    score.player = 0;
    score.computer = 0;
    document.querySelector("#player-score").innerText = score.player;
    document.querySelector("#computer-score").innerText = score.computer;
  }
  //}
}

function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  return rank[randInt];
}

function playRound(playerSelection, computerSelection) {
  document.querySelector("#computer-hand").innerText =
    symbols[computerSelection];
  document.querySelector("#player-hand").innerText = symbols[playerSelection];

  //console.log("test", playerSelection);
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      // checkFinalScore();
      score.player += 1;
      document.querySelector("#player-score").innerText = score.player;
      return "paper wins";
    } else {
      if (computerSelection === "scissors") {
        // checkFinalScore();
        score.computer += 1;
        document.querySelector("#computer-score").innerText = score.computer;
        return "scissors wins";
      }
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      // checkFinalScore();
      score.computer += 1;
      document.querySelector("#computer-score").innerText = score.computer;
      return "rock wins";
    } else {
      if (computerSelection === "paper") {
        // checkFinalScore();
        score.player += 1;
        document.querySelector("#player-score").innerText = score.player;
        return "scissors wins";
      }
    }
  }
  if (playerSelection === "rock") {
    if (computerSelection == "scissors") {
      // checkFinalScore();
      score.player += 1;
      document.querySelector("#player-score").innerText = score.player;
      return "rock wins";
    } else {
      if (computerSelection === "paper") {
        // checkFinalScore();
        score.computer += 1;
        document.querySelector("#computer-score").innerText = score.computer;
        return "paper wins";
      }
    }
  }
}

let btns = document.querySelectorAll("button");
Array.from(btns).forEach(
  (btn) =>
    (btn.onclick = () => {
      let maxScore = Math.max(score.player, score.computer);
      if (maxScore > 4) {
        // playRound(btn.id, getComputerChoice());
        checkFinalScore(maxScore);
        return;
      }
      playRound(btn.id, getComputerChoice());
    })
);

console.log("mayya", btns);
