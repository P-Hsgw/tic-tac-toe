const gameBoard = (() => {
  const containers = document.querySelector(".container")
  const board = ["", "", "", "", "", "", "", "", ""];
  let i = 0
  for (i=0; i < board.length; i++) {
    let newBox = document.createElement("div")
    newBox.classList.add("field")
    newBox.setAttribute("id", `${i}`);
    containers.appendChild(newBox);
  }

  



  const winningCombination = ""

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