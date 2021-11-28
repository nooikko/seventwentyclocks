import React, {useContext} from 'react';
import { Rect } from 'react-konva';
import { ClockContext } from '..';

interface ClockHandProps {
  hand: 'short' | 'long';
  rotation: number;
}

const getWidth = (hand: ClockHandProps['hand'], dimension: number) => {
    switch (hand) {
      case 'short':
        return dimension / 25;
      case 'long':
        return dimension / 35;
    }
};

const getLength = (hand: ClockHandProps['hand'], dimension: number) => {
  switch (hand) {
    case 'short':
      return (dimension / 3) - (dimension / 25);
    case 'long':
      return (dimension / 2) - (dimension / 35);
  }
};

export const ClockHand: React.FC<ClockHandProps> = ({ hand, rotation }) => {
  const { dimension } = useContext(ClockContext);

  const width = getWidth(hand, dimension);
  const length = getLength(hand, dimension);

  return (
    <Rect offsetX={(width / 2)} offsetY={(length / 2) - (dimension / (hand === 'short' ? 6 : 4)) + width - 1} width={width} height={length} fill='red' rotation={rotation} />

  );
};
