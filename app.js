const gameBoard = (() => {
  let board = new Array(9).fill(null);
  // Render game board at the start of the game
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

  // Return true if winning combination is met
  let winningCombination = (symbol) => {
    if (board[0] === symbol &&
    board[1] === symbol &&
    board[2] === symbol ||
    board[3] === symbol &&
    board[4] === symbol &&
    board[5] === symbol ||
    board[6] === symbol &&
    board[7] === symbol &&
    board[8] === symbol ||
    board[0] === symbol &&
    board[3] === symbol &&
    board[6] === symbol ||
    board[1] === symbol &&
    board[4] === symbol &&
    board[7] === symbol ||
    board[2] === symbol &&
    board[5] === symbol &&
    board[8] === symbol ||
    board[0] === symbol &&
    board[4] === symbol &&
    board[8] === symbol ||
    board[2] === symbol &&
    board[4] === symbol &&
    board[6] === symbol ||
    board[6] === symbol &&
    board[7] === symbol &&
    board[8] === symbol ||
    board[0] === symbol &&
    board[3] === symbol &&
    board[6] === symbol ||
    board[1] === symbol &&
    board[4] === symbol &&
    board[7] === symbol ||
    board[2] === symbol &&
    board[5] === symbol &&
    board[8] === symbol
    ) {
      return true
    } else {
      return false
    }
  }

  return {
    board,
    winningCombination
  };

})();

const displayController = (() => {
  let gameEnded = false;

  // Add event listeners that populate the board array depending on players round. If gameEnded = true, don't trigger the listeners.
  const populateBoard = (() => {
    const allFields = document.querySelectorAll(".container")
    allFields.forEach(field => {
      field.addEventListener("click", () => {
      if (gameBoard.board[field.dataset.index] === null && gameEnded === false) {
        if (player1.round) {
          gameBoard.board[field.dataset.index] = "X"
        }
        if (player2.round) {
          gameBoard.board[field.dataset.index] = "O"
        }
        player1.round = !player1.round
        player2.round = !player2.round
        field.innerHTML = gameBoard.board[field.dataset.index];
        checkWinner()
      } else {
        return;
      }
      })
    })
  })()

  // Check if winningCombination is met. If yes - returns innerHTML and gameEnded = true
  const checkWinner =() => {
    const displayResult = document.getElementById("result")
    if (gameBoard.winningCombination(player1.symbol)) {
      displayResult.innerHTML = `The winner is... ${player1.name}`
      gameEnded = true;
    }
    if (gameBoard.winningCombination(player2.symbol)) {
      displayResult.innerHTML = `The winner is... ${player2.name}`
      gameEnded = true;
    }
    if (gameBoard.board.every(symbol => symbol != null)) {
      displayResult.innerHTML = `It's a tie`
      gameEnded = true;
    }
  }
})();

const Player = (name, symbol, round) => {
  return {
    name,
    symbol,
    round, // true defines who starts first
  };
};

const player1 = Player ("Patryk", "X", true);
const player2 = Player ("Marino", "O", false);