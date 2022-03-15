const p1 = {
  score: 0,
  button: document.querySelector('#player1btn'),
  display: document.querySelector('#player1display'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#player2btn'),
  display: document.querySelector('#player2display'),
};

const playTo = document.querySelector('#upto');
const resetBtn = document.querySelector('#reset');
let winScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', () => updateScore(p1, p2));

p2.button.addEventListener('click', () => updateScore(p2, p1));

playTo.addEventListener('change', (e) => {
  winScore = parseInt(e.target.value);
  reset();
});

const reset = () => {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.button.classList.remove('has-text-success', 'has-text-danger');
  p2.button.classList.remove('has-text-success', 'has-text-danger');
  p1.button.disabled = false;
  p1.button.disabled = false;
};

resetBtn.addEventListener('click', reset);
