import { ClockContextI } from '../../../types';

const findClosestEmptyPosition = (array: ClockContextI['times'], current: ClockContextI['times'][number], rowCount: number, columnMax: number) => {
  let checkRow = 0;
  let checkColumn = 0;
  let matching = true;

  while (matching) {
    const matchingItem = array.find(({ row, column }) => row === checkRow && column === checkColumn); // eslint-disable-line
    matching = matchingItem !== undefined;
    if (matching) {
      if (checkRow >= rowCount) {
        checkRow = 0;
        if (checkColumn !== columnMax) {
          checkColumn++;
        }
      } else {
        checkRow++;
      }
    }
  }


  return {
    row: checkRow,
    column: checkColumn,
  };
};


// TODO: Build a better shuffling algorithm
// The issue that the last items are not being shuffled since all the other positions have been filled
export function shuffleTimes(array: ClockContextI['times'], rowCount: number): ClockContextI['times'] {
  const output: ClockContextI['times'] = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const columnCount = array[array.length - 1]['column'];
    let randomColumn = Math.floor(Math.random() * columnCount);
    let randomRow = Math.floor(Math.random() * rowCount);

    const matchingPosition = output.find(({ row, column }) => row === randomRow && column === randomColumn);

    if (matchingPosition !== undefined) {
      const newPositions = findClosestEmptyPosition(output, current, rowCount, columnCount);

      randomRow = newPositions.row;
      randomColumn = newPositions.column;
    }

    output.push({
      ...current,
      row: randomRow,
      column: randomColumn,
    });

  }

  return output;
}