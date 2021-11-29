import { ClockContextI } from '../../../types';

function shuffle(array: ClockContextI['times']) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function shuffleTimes(array: ClockContextI['times'], rowCount: number, dimension: number): ClockContextI['times'] {
  const shuffled = shuffle(array);

  let row = 0;
  let column = 0;
  const output = [];

  for (let i = 0; i < shuffled.length; i++) {
    const current = shuffled[i];

    output.push({
      ...current,
      row,
      column,
      xPos: (row * 1.25) * dimension,
      yPos: (column * 1.18) * dimension,
    });

    row++;

    if (row > rowCount) {
      row = 0;
      column++;
    }
  }

  return output;
}