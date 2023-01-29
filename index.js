//IIFE that stores board array
const gameBoard = (() => {
  let board = [0,0,0,0,0,0,0,0,0];
  return function() {
    const squareId = this.id;
    const squareIndex = squareId.split('square')[1];
    board[squareIndex] = 1;
    //change bakcgroundcolor of the spec square
    this.style.backgroundColor = 'blue';
    console.log(board);
  }
})();

window.addEventListener('load', () =>{
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', gameBoard);
  }
});