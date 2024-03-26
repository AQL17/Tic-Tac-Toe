// Gameboard

function player(name , token){
    const getname = () =>  name;
    const gettoken = () => token;
    
    return{getname , gettoken}
} 



const gameboard = (function () {
   let board = [];
   board = [[0,0,0] , [0,0,0], [0,0,0]];

   const resetboard = () => {
    board = [[0,0,0] , [0,0,0] , [0,0,0]];
   }
   console.log(board);

   let player1 = player('Player1' , 'X');

   let player2 = player('Player2' , 'O')

   const getPlayers = () => [player1 , player2]

   const getboard = () => board;
 

   return {getboard , getPlayers , resetboard}
})();


function gameManager(){
    const newround = () =>{
        gameboard.resetboard();
    }

    const checkwin = () => {
        
    }
}



const playround = (function (){
const [player1 , player2] = gameboard.getPlayers();

let activePlayer = player1; 

function entervalue(number1 , number2){
    let board = game.getboard();
    board[number1][number2] = activePlayer.gettoken();
    console.log(board);
    switchplayer();
}

function switchplayer(){

    let test = (activePlayer == player1) ? activePlayer = player2 : activePlayer = player1;


    console.log(`${activePlayer.getname()}'s turn`);
}
return{entervalue , switchplayer}
}
)();





