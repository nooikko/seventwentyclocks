import { ClockContextI } from '../../../types';

export const getWidth = (hand: keyof ClockContextI['times'][number], dimension: ClockContextI['dimension']) => {
    switch (hand) {
      case 'hour':
        return dimension / 25;
      case 'minute':
        return dimension / 35;
    }
};