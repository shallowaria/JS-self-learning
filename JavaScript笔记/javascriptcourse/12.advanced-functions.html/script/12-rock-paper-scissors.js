// 2.调用localStorage存储
let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    alert('The Score is been reset,haveFUN:)');
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';
    // 局部函数不能在局外作用
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    // 返回语句,可添加任何东西，且立即结束语句
    return computerMove;
}

// 自动游玩与停止
let isAutoPlaying = false;
let intervalId;
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove) {
    // return到这里的pickComputerMove中再赋值到此处的computerMove
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win!';
        }
    }
    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    }
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win!';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    // 1.只支持存储字符串
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement()

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You 
        <img src="../images/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="../images/${computerMove}-emoji.png" alt="" class="move-icon">
        Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}