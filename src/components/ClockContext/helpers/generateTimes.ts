import { ClockContextI } from '../../../types';
import { shuffleTimes } from '.';

export const generateTimes = (shuffle = false, rowCount: number) => {
  const hours = [...Array(12).keys()].map((_, i) => ++i);
  const minutes = [...Array(60).keys()];

  const output = hours.reduce((acc, hour) => {
    let row = 0;
    let column = 0;

    if (acc.length) {
      row = acc[acc.length - 1]['row']; // eslint-disable-line
      column = acc[acc.length - 1]['column']; // eslint-disable-line
    }

    minutes.forEach((minute) => {

      if (row === rowCount) {
        row = 0;
        column++;
      }

      acc.push({
        hour,
        minute,
        row,
        column,
      });

      if (row !== rowCount) {
        row++;
      }
    });
    return acc;
  }, [] as ClockContextI['times']);

  if (shuffle) {
    return shuffleTimes(output, rowCount);
  }

  return output;
};