const winDiagFunc = grid => {
  let gridCopy = grid.map(square => {
    delete square.disabled;
    return square;
  });

  if (gridCopy[0] === "X" && gridCopy[4] === "X" && gridCopy[9] === "X") {
    return "X wins!";
  }
  if (gridCopy[2] === "X" && gridCopy[4] === "X" && gridCopy[6] === "X") {
    return "X wins!";
  }
  if (gridCopy[0] === "O" && gridCopy[4] === "O" && gridCopy[9] === "O") {
    return "O wins!";
  }
  if (gridCopy[2] === "O" && gridCopy[4] === "O" && gridCopy[6] === "O") {
    return "O wins!";
  }

  return "";
};

module.exports = { winDiagFunc };
