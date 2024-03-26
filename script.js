// Gameboard

const game = (function () {
   const board = [];
   const rows = 3;
   const columns = 3;


   for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(0);
        }
   }

   console.log(board);

   let player1 = {
    name: "player1",
    token : "X"
   }

   let player2 = {
    name : "player2",
    token : "O"
   }

   const getPlayers = () => [player1 , player2]

   const getboard = () => board;
 

   return {getboard , getPlayers}
})();

function entervalue(number1 , number2){
    let board = game.getboard();
    board[number1][number2] = 'x';
    console.log(board);
}

function switchplayer(){
    const [player1 , player2] = game.getPlayers();
    let activePlayer = player1;

    let test = (activePlayer == player1) ? activePlayer = player2 : activePlayer = player1;

    console.log(test);
}




