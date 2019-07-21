var boardState = [];
var boardScore = [];
var turn = true;
var counter = 0;
var Player1wins = false;
var Player2wins = false;
var sum;
var GameMode2 = true;

function GameMode() {
    if (document.getElementById('2PlayerGM').checked) {
        GameMode2 = true;
    } else if (document.getElementById('1PlayerGM').checked) {
        GameMode2 = false;
    }
}

function Reset() {
    for (let i = 0; i < 9; i++) {
        boardState[i].textContent = '';
        boardScore[i] = 0;
        Player1wins = false;
        Player2wins = false;
    }
}

function SetBoardScore() {
    boardScore = [];
    for (let i = 0; i < 9; i++) {
        if (boardState[i].innerHTML === 'O') {
            boardScore.push(1);

        } else if (boardState[i].innerHTML === 'X') {
            boardScore.push(-1);

        } else {
            boardScore.push(0);
        }
    }

}

function finalCheck() {
    /// horizontal
    for (let i = 0; i < 9; i += 3) {
        if ((boardScore[i] + boardScore[i + 1] + boardScore[i + 2]) === 3) {
            return Player1wins = true;
        } else if ((boardScore[i] + boardScore[i + 1] + boardScore[i + 2]) === -3) {
            return Player2wins = true;
        } else {
        }
    }
    /// vertical
    for (let i = 0; i < 3; i += 1) {
        if ((boardScore[i] + boardScore[i + 3] + boardScore[i + 6]) === 3) {
            return Player1wins = true;
        } else if ((boardScore[i] + boardScore[i + 3] + boardScore[i + 6]) === -3) {
            return Player2wins = true;
        } else {
        }
        /// diagonal check
        for (let i = 0; i < 1; i += 1) {
            if (((boardScore[i] + boardScore[i + 4] + boardScore[i + 8]) === 3) || (boardScore[2] + boardScore[4] + boardScore[8] === 3)) {
                return Player1wins = true;
            } else if ((((boardScore[i] + boardScore[i + 4] + boardScore[i + 8]) === -3) || (boardScore[2] + boardScore[4] + boardScore[8] === -3))) {
                return Player2wins = true;
            } else {
            }
        }
    }
}

window.onload = function () {
    for (let i = 0; i < 9; i++) {
        boardState.push(document.getElementById(i));
        boardState[i].addEventListener('click', function () {
            if (!boardState[i].innerHTML) {
                if (turn) {
                    boardState[i].innerHTML = 'O';
                } else {
                    boardState[i].innerHTML = "X";
                }
            } else {
            }
            turn = !turn;
            counter++;
            SetBoardScore();
            finalCheck();
            if (Player1wins === true) {
                setTimeout(function () {
                    alert("Player 1 has won");
                }, 100);
                Reset();
            } else if (Player2wins === true) {
                setTimeout(function () {
                    alert("Player 2 has won");
                }, 100);
                Reset();
            } else if (counter === 9) {
                setTimeout(function () {
                    alert("This game is a draw");
                }, 100);
                Reset();
            }
        });
    }
}
