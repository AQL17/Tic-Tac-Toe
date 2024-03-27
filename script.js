// Gameboard

function player(name, token) {
    let score = 0;
    const getname = () => name;
    const gettoken = () => token;
    const scoreupdate = () => score++;
    const getscore = () => score;
    return { getname, gettoken, scoreupdate, getscore }
}



const gameboard = (function () {
    let board = [];
    board = [['', '', ''], ['', '', ''], ['', '', '']];

    const resetboard = () => {
        board = [['', '', ''], ['', '', ''], ['', '', '']];
    }
    console.log(board);

    let player1 = player('Player1', 'X');

    let player2 = player('Player2', 'O')

    const getPlayers = () => [player1, player2]

    const getboard = () => board;

    return { getboard, getPlayers, resetboard }
})();


const gameManager = (function () {
    const newround = () => {
        gameboard.resetboard();
        let board = gameboard.getboard();
        console.log(board);
    }


    return { newround }

})();



const playround = (function () {

    const turnDisplay = document.querySelector('.turn-display');
    const player1score = document.querySelector('.score1');
    const player2score = document.querySelector('.score2');

    let board = gameboard.getboard();

    const [player1, player2] = gameboard.getPlayers();

    let activePlayer = player1;

    console.log(`${activePlayer.getname()}'s turn`);

    turnDisplay.innerHTML = `${activePlayer.getname()}'s turn`

    function entervalue(number1, number2) {
        if (board[number1][number2] === '') {
            board[number1][number2] = activePlayer.gettoken();

            console.log(board);

            if (!checkwin()) {

                switchplayer();

            } else {

                console.log(player1.getscore());
                console.log(player2.getscore());

                player1score.innerHTML = player1.getscore()
                player2score.innerHTML = player2.getscore()

                gameboard.resetboard();
                board = gameboard.getboard();

            }
        } else {
            console.log('Please enter on available spaces');
            turnDisplay.innerHTML = 'Please enter on available spaces!'
        }
    }

    function switchplayer() {

        let test = (activePlayer == player1) ? activePlayer = player2 : activePlayer = player1;
        console.log(`${activePlayer.getname()}'s turn`);
        turnDisplay.innerHTML = `${activePlayer.getname()}'s turn`
    }

    const checkwin = () => {
        function sayWinner(player) {
            turnDisplay.innerHTML = `${player.getname()} wins`
        }

        // Rows
        if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] != '') {
            if (board[0][0] === player1.gettoken()) {

                console.log(`${player1.getname()} wins`);
                player1.scoreupdate();
                sayWinner(player1);

            }
            if (board[0][0] === player2.gettoken()) {

                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);

            }
            return true;
        }
        if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] != '') {
            if (board[1][0] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`);
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[1][0] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }
        if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] != '') {
            if (board[2][0] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`)
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[2][0] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }
        // Columns
        if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] != '') {
            if (board[0][0] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`)
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[0][0] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }
        if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] != '') {
            if (board[0][1] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`)
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[0][1] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }
        if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] != '') {
            if (board[0][2] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`)
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[0][2] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }
        // Diagonals
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] != '') {
            if (board[0][0] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`)
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[0][0] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] != '') {
            if (board[0][2] === player1.gettoken()) {
                console.log(`${player1.getname()} wins`)
                player1.scoreupdate();
                sayWinner(player1);
            }
            if (board[0][2] === player2.gettoken()) {
                console.log(`${player2.getname()} wins`)
                player2.scoreupdate();
                sayWinner(player2);
            }
            return true;
        }

        //Tie
        const isNotZero = (arr) => arr.every(value => value != '');
        if (isNotZero(board[0]) && isNotZero(board[1]) && isNotZero(board[2])) {
            console.log('It\'s a tie');
            turnDisplay.innerHTML = 'It\'s a tie'
            return true;
        }

    }

    return { entervalue, switchplayer }
}
)();

const displayControl = (function () {
    let cells = document.querySelectorAll('.cell');
    const fillcells = () => {
        let board = gameboard.getboard();
        cells[0].innerHTML = board[0][0];
        cells[1].innerHTML = board[0][1];
        cells[2].innerHTML = board[0][2];
        cells[3].innerHTML = board[1][0];
        cells[4].innerHTML = board[1][1];
        cells[5].innerHTML = board[1][2];
        cells[6].innerHTML = board[2][0];
        cells[7].innerHTML = board[2][1];
        cells[8].innerHTML = board[2][2];

    }
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            let number1 = cell.dataset.x;
            let number2 = cell.dataset.y;
            playround.entervalue(number1, number2);
            fillcells();
        });

    })

    return { fillcells }

})()
displayControl.fillcells();
