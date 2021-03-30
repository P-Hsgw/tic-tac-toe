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
        checkWinner()
        
      } else {
        return;
      }
      })
    })
  })()

  const checkWinner =() => {
    if (gameBoard.winningCombination(player1.symbol)) {
      console.log (`Working ${player1.name}`)
    }
    if (gameBoard.winningCombination(player2.symbol)) {
      console.log (`Working ${player2.name}`)
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


// Jeżeli symbol jest na danych pozycjach arr, to true
// Puścić symbol do winning combination
// winning combination tylko bierze symbol, a faktycznie implementuje go Player Factory
// Jeśli Symbol z Player Factory sie zgadza, zwróć true 
// Jeśli true, triggeruje odpowiednie mechanizmy w displayController

// Dodać funkcje - jeśleli Player wygrywa, to zwróć player name i napisz że wygrał dany gracz