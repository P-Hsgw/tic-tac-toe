// Plan player rounds - X goes first, O goes second
// Add a function to swap between rounds - first is X, second is O

const gameBoard = (() => {
  let board = new Array(9).fill(null);
  const renderBoard = (() => {
    const gridContainer = document.querySelector(".grid-container")
    let i = 0
    for (i=0; i < board.length; i++) {
      let newBox = document.createElement("div");
      newBox.classList.add("container");
      newBox.classList.add(`container_${i}`);
      newBox.setAttribute("id", `${i}`);
      newBox.dataset.index = i
      newBox.innerHTML = board[i];
      gridContainer.appendChild(newBox);
    }
  })();
  const winningCombination = []

  return {
    board
  };

})();

const displayController = (() => {
  const populateBoard = (() => {
    const allFields = document.querySelectorAll(".container")
    allFields.forEach(field => {
      field.addEventListener("click", () => {
      if (gameBoard.board[field.dataset.index] === null) {
        gameBoard.board[field.dataset.index] = "X"
        field.innerHTML = gameBoard.board[field.dataset.index];
      } else {
        return;
      }
      })
    })
  })()
  
})();

const Player = (name, symbol) => {
  return {
    name,
    symbol
  }
};

const player1 = Player ("Patryk", "X");
const player2 = Player ("Marino", "O");