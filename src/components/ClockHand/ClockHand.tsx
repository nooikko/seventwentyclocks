import React, {useContext} from 'react';
import { Rect } from 'react-konva';
import { ClockContext } from '..';
import { getLength, getWidth } from './helpers';

interface ClockHandProps {
  hand: 'hour' | 'minute';
  rotation: number;
}

export const ClockHand: React.FC<ClockHandProps> = ({ hand, rotation }) => {
  const { dimension } = useContext(ClockContext);

  const width = getWidth(hand, dimension);
  const length = getLength(hand, dimension);

  return (
    <Rect
      offsetX={(width / 2)}
      offsetY={(length / 2) - (dimension / (hand === 'hour' ? 6 : 4)) + width - 1}
      width={width}
      height={length}
      fill='red'
      rotation={rotation}
    />
  );
};
