/* ================================
   Rock-Paper-Scissors Game
================================ */
let playerScore = 0;
let computerScore = 0;

function playRPS(playerChoice) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = `Computer chose ${computerChoice}. `;

  if (playerChoice === computerChoice) {
    resultText += "It's a tie!";
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    resultText += "You win!";
    playerScore++;
  } else {
    resultText += "You lose!";
    computerScore++;
  }

  document.getElementById('rpsResult').innerText = resultText;
  document.getElementById('rpsScore').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

/* ================================
   Countdown Timer
================================ */
function updateCountdown() {
  const targetDate = new Date("2026-05-30T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerText = "🎉 LAST DAY OF SCHOOL!!!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Start the countdown
setInterval(updateCountdown, 1000);
updateCountdown();

/* ================================
   Sidebar Toggle
================================ */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
