let playerScore = 0;
let computerScore = 0;
let isPlayerBatting = true;

function play(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 6) + 1;
    const playerChoiceDisplay = document.getElementById('playerChoice');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const resultDisplay = document.getElementById('result');
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const correctSound = document.getElementById('correctSound');
    const wrongSound = document.getElementById('wrongSound');

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = 'Out!';
        resultDisplay.style.color = 'red';
        wrongSound.play();

        if (isPlayerBatting) {
            isPlayerBatting = false;
            resultDisplay.textContent += ' Computer is now batting.';
        } else {
            resultDisplay.textContent += ' Player is now batting.';
        }
        playerScore = 0;
        computerScore = 0;
    } else {
        if (isPlayerBatting) {
            playerScore += playerChoice;
            resultDisplay.textContent = 'Player scored!';
            resultDisplay.style.color = 'green';
            correctSound.play();
        } else {
            computerScore += computerChoice;
            resultDisplay.textContent = 'Computer scored!';
            resultDisplay.style.color = 'blue';
            correctSound.play();
        }
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function toggleBatting() {
    isPlayerBatting = !isPlayerBatting;
    document.querySelector('.toggle-btn').textContent = isPlayerBatting ? 'Switch to Bowling' : 'Switch to Batting';
    document.getElementById('result').textContent = isPlayerBatting ? 'Player is now batting' : 'Computer is now batting';
}
