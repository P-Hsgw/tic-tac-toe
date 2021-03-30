// Plan player rounds - X goes first, O goes second
// Add a function to swap between rounds - first is X, second is O

// To make rounds toggle true / false after X choice

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

  const winningCombination = () => {
    if (board[0] == "X" &&
    board[1] == "X" &&
    board[2] == "X" ||
    board[3] == "X" &&
    board[4] == "X" &&
    board[5] == "X" ||
    board[6] == "X" &&
    board[7] == "X" &&
    board[8] == "X" ||
    board[0] == "X" &&
    board[3] == "X" &&
    board[6] == "X" ||
    board[1] == "X" &&
    board[4] == "X" &&
    board[7] == "X" ||
    board[2] == "X" &&
    board[5] == "X" &&
    board[8] == "X" ||
    board[0] == "X" &&
    board[4] == "X" &&
    board[8] == "X" ||
    board[2] == "X" &&
    board[4] == "X" &&
    board[6] == "X" ||
    board[6] == "X" &&
    board[7] == "X" &&
    board[8] == "X" ||
    board[0] == "X" &&
    board[3] == "X" &&
    board[6] == "X" ||
    board[1] == "X" &&
    board[4] == "X" &&
    board[7] == "X" ||
    board[2] == "X" &&
    board[5] == "X" &&
    board[8] == "X"
    ) {
      console.log("luv X")
    } else if (board[0] == "O" &&
    board[1] == "O" &&
    board[2] == "O" ||
    board[3] == "O" &&
    board[4] == "O" &&
    board[5] == "O" ||
    board[6] == "O" &&
    board[7] == "O" &&
    board[8] == "O" ||
    board[0] == "O" &&
    board[3] == "O" &&
    board[6] == "O" ||
    board[1] == "O" &&
    board[4] == "O" &&
    board[7] == "O" ||
    board[2] == "O" &&
    board[5] == "O" &&
    board[8] == "O" ||
    board[0] == "O" &&
    board[4] == "O" &&
    board[8] == "O" ||
    board[2] == "O" &&
    board[4] == "O" &&
    board[6] == "O" ||
    board[6] == "O" &&
    board[7] == "O" &&
    board[8] == "O" ||
    board[0] == "O" &&
    board[3] == "O" &&
    board[6] == "O" ||
    board[1] == "O" &&
    board[4] == "O" &&
    board[7] == "O" ||
    board[2] == "O" &&
    board[5] == "O" &&
    board[8] == "O") 
    {
      console.log("Luv O")
    }

  }

  return {
    board,
    winningCombination
  };

})();

const displayController = (() => {
  const populateBoard = (() => {
    const allFields = document.querySelectorAll(".container")
    allFields.forEach(field => {
      field.addEventListener("click", () => {
      if (gameBoard.board[field.dataset.index] === null) {
        if (player1.round) {
          gameBoard.board[field.dataset.index] = "X"
        }
        if (player2.round) {
          gameBoard.board[field.dataset.index] = "O"
        }
        player1.round = !player1.round
        player2.round = !player2.round
        field.innerHTML = gameBoard.board[field.dataset.index];
        gameBoard.winningCombination()
        console.log(field.dataset.index)
      } else {
        return;
      }
      })
    })
  })()
  
})();

const Player = (name, symbol, round) => {
  return {
    name,
    symbol,
    round
  }
};

const player1 = Player ("Patryk", "X", true);
const player2 = Player ("Marino", "O", false);
