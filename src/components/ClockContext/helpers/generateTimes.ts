import { ClockContextI } from '../../../types';
import { shuffleTimes } from '.';

export const generateTimes = (shuffle = false) => {
  const hours = [...Array(12).keys()].map((_, i) => ++i);
  const minutes = [...Array(60).keys()];

  const output = hours.reduce((acc, hour) => {
    minutes.forEach((minute) => {
      acc.push({
        hour,
        minute,
      });
    });
    return acc;
  }, [] as ClockContextI['times']);

  if (shuffle) {
    return shuffleTimes(output);
  }

  return output;
};