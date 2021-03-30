// array should be populated whenever user clicks on corresponding div 

// Plan player rounds - X goes first, O goes second
// Add event listeners to occupy the array when div is clicked
//Can't occupy same array with two different symbols 

const gameBoard = (() => {
  const board = new Array(9).fill("X");
  
  const createBoard = (() => {
    const gridContainer = document.querySelector(".grid-container")
    let i = 0
    for (i=0; i < board.length; i++) {
      let newBox = document.createElement("div")
      newBox.classList.add("container")
      newBox.classList.add(`container_${i}`)
      newBox.setAttribute("id", `${i}`);
      newBox.innerHTML = board[i]
      gridContainer.appendChild(newBox);
    }
  })()
  const winningCombination = []

  return {
    createBoard,
    board
  };
})();

// const displayControler (() => {

// })();
const Player = (name, symbol) => {
  return {
    name,
    symbol
  }
};

const player1 = Player ("Patryk", "X");
const player2 = Player ("Marino", "O");