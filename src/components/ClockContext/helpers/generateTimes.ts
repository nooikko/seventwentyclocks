import { ClockContextI } from '../../../types';
import { shuffleTimes } from '.';

export const generateTimes = (shuffle = false, rowCount: number, dimension: number) => {
  const hours = [...Array(12).keys()].map((_, i) => ++i);
  const minutes = [...Array(60).keys()];

  const output = hours.reduce((acc, hour) => {
    let row = 0;
    let column = 0;

    minutes.forEach((minute) => {

      if (acc.length) {
        row = acc[acc.length - 1]['row']; // eslint-disable-line
        column = acc[acc.length - 1]['column']; // eslint-disable-line

        if (row === rowCount) {
          row = 0;
          column++;
        } else if (row < rowCount) {
          row++;
        }
      }


      acc.push({
        hour,
        minute,
        row,
        column,
        xPos: (row * 1.25) * dimension,
        yPos: (column * 1.18) * dimension,
      });


    });

    return acc;
  }, [] as ClockContextI['times']);

  if (shuffle) {
    return shuffleTimes(output, rowCount, dimension);
  }

  return output;
};