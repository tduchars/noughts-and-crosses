const winDiagFunc = grid => {
  const copyGrid = grid;
  // const gridInRows = putInRows(copyGrid);
  console.log(gridInRows);
  // const winningCombos = {
  //   x1:
  // }

  return 'no winner';
};

// const putInRows = arr => {
//   const row1 = [arr[0], arr[1], arr[2]];
//   const row2 = [arr[3], arr[4], arr[5]];
//   const row3 = [arr[6], arr[7], arr[8]];
//   const gridInRows = [row1, row2, row3];
//   return gridInRows;
// };

module.exports = { winDiagFunc };
