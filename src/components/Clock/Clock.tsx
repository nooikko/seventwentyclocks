import React, { useContext } from 'react';
import { Circle, Group } from 'react-konva';
import { ClockContext, ClockHand } from '..';

interface ClockProps {
  hour: number;
  minute: number;
}

const getRotation = (base: number, type: 'hour' | 'minute') => {
  switch (type) {
    case 'hour':
      return ((360 / 12) * base) - 180;
    case 'minute':
      return ((360 / 60) * base) - 180;
  }
};

export const Clock: React.FC<ClockProps> = ({ hour, minute }) => {
  const { dimension } = useContext(ClockContext);

  const hourRotation = getRotation(hour, 'hour');
  const minuteRotation = getRotation(minute, 'minute');

  return (
    <Group width={dimension} height={dimension} x={dimension / 1.5} y={dimension / 1.5}>
      <Circle fill='#EFF1F3' height={dimension} width={dimension} stroke='#888' strokeWidth={3} />
      <ClockHand hand='short' rotation={hourRotation}/>
      <ClockHand hand='long' rotation={minuteRotation}/>
    </Group>
      );
};
