import React, { useContext } from 'react';
import { Circle, Group } from 'react-konva';
import { ClockContext, ClockHand } from '..';
import { getRotation } from './helpers';

interface ClockProps {
  hour: number;
  minute: number;
  xPos: number;
  yPos: number;
}

export const Clock: React.FC<ClockProps> = ({ hour, minute, xPos, yPos }) => {
  const { dimension } = useContext(ClockContext);

  const hourRotation = getRotation(hour, 'hour');
  const minuteRotation = getRotation(minute, 'minute');

  return (
    <Group width={dimension} height={dimension} x={xPos} y={yPos}>
      <Circle fill='#EFF1F3' height={dimension} width={dimension} stroke='#888' strokeWidth={3} />
      <ClockHand hand='hour' rotation={hourRotation}/>
      <ClockHand hand='minute' rotation={minuteRotation}/>
    </Group>
      );
};
