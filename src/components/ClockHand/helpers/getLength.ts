import { ClockContextI } from '../../../types';

export const getLength = (hand: keyof ClockContextI['times'][number], dimension: ClockContextI['dimension']) => {
  switch (hand) {
    case 'hour':
      return (dimension / 3) - (dimension / 25);
    case 'minute':
      return (dimension / 2) - (dimension / 35);
  }

  return 0;
};