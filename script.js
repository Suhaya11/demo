'use strict'; // rollDiceBtn.addEventListener('click', rollGame());
// function rollGame() {
//   let currentPlayerScore = document.querySelector(
//     `.current--${currentPlayer}--player--score`
//   );
//   let rollNumber = Math.trunc(Math.random() * 6) + 1;
//   console.log(rollNumber);
//   diceBall.src = `dice-${rollNumber}.png`;
//   if (rollNumber != 1 && score < 100) {
//     score = score + rollNumber;

//     currentPlayerScore.textContent = score;
//     console.log('suhaya');
//   } else {
//     switchPlayer();
//   }
// }

// function switchPlayer() {
//   score = 0;
//   if (currentPlayer === 0) {
//     currentPlayer++;
//     rollGame();
//   } else if (currentPlayer >= 1) {
//     currentPlayer = 0;
//     rollGame();
//   }
//   console.log(currentPlayer);
// }
const resetbtn = document.querySelector('.new-game');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const holdScore = document.querySelector('.hold-score');
const rollDiceBtn = document.querySelector('.roll-dice-btn');
const player0RealScore = document.querySelector('.player--0--score');
const player1RealScore = document.querySelector('.player--1--score');
const diceBall = document.querySelector('.diceBall');
let win = document.querySelector('.win');
player0RealScore.textContent = 0;
player1RealScore.textContent = 0;
let playing = true;
let currentPlayer, currentPlayerScore, score;
const scores = [0, 0];

currentPlayer = 0;
currentPlayerScore = 0;
score = 0;
player0RealScore.textContent = 0;
player1RealScore.textContent = 0;
document.querySelector('.new-game').addEventListener('click', () => {
  currentPlayer, currentPlayerScore, (score = 0);
});
document.querySelector('.roll-dice-btn').addEventListener('click', () => {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    if (diceNumber !== 1) {
      if (diceBall.classList.contains('hide')) {
        diceBall.classList.remove('hide');
      }
      diceBall.src = `dice-${diceNumber}.png`;
      score += diceNumber;
      console.log(score);
      currentPlayerScore = document.querySelector(
        `.current--${currentPlayer}--player--score`
      );
      currentPlayerScore.textContent = score;
    } else {
      //switch player

      diceBall.src = `dice-${diceNumber}.png`;
      switchPlayer();
    }
  }
});

function switchPlayer() {
  let currentPlayerScore = document.querySelector(
    `.current--${currentPlayer}--player--score`
  );
  score = 0;
  currentPlayerScore.textContent = score;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('active-player-bg');
  player1El.classList.toggle('active-player-bg');
}

holdScore.addEventListener('click', () => {
  if (playing) {
    let currentScore = Number(currentPlayerScore.textContent);
    console.log('this is currentScore' + currentScore);
    scores[currentPlayer] += currentScore;
    let totalPlayerScore = document.querySelector(
      `.player--${currentPlayer}--score`
    ).textContent;
    if (scores[currentPlayer] > 100) {
      document.querySelector(
        `.current--${currentPlayer}--player--score`
      ).textContent = 0;
      console.log('totl = ' + totalPlayerScore);
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('active-player-bg');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('winner');
      diceBall.classList.add('hide');
      document.querySelector(`.player--${currentPlayer}--score`).textContent =
        scores[currentPlayer];
      playing = false;
      if (currentPlayer === 0) {
        win.style.left = '20vw';
        console.log('here wewon');
      } else {
        win.style.right = '20vw';
      }
      win.classList.remove('hide');
    } else {
      document.querySelector(`.player--${currentPlayer}--score`).textContent =
        scores[currentPlayer];

      switchPlayer();
    }
  }
});

function reset() {
  playing = true;
  scores[0] = 0;
  scores[1] = 0;

  diceBall.classList.remove('hide');
  document.querySelector('.player--0--score').textContent = 0;
  document.querySelector('.current--0--player--score').textContent = 0;
  document.querySelector('.current--1--player--score').textContent = 0;
  document.querySelector('.player--1--score').textContent = 0;
  if (player0El.classList.contains('winner')) {
    player0El.classList.remove('winner');
    player0El.classList.add('active-player-bg');
  }
  if (player1El.classList.contains('winner')) {
    player1El.classList.remove('winner');
  }
}
