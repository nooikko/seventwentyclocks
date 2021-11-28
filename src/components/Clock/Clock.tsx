import React, { useContext } from 'react';
import { Circle, Group } from 'react-konva';
import { ClockContext, ClockHand } from '..';
import { getRotation } from './helpers';
import { ClockContextI } from '../../types';


export const Clock: React.FC<ClockContextI['times'][number]> = ({ hour, minute }) => {
  const { dimension } = useContext(ClockContext);

  const hourRotation = getRotation(hour, 'hour');
  const minuteRotation = getRotation(minute, 'minute');

  return (
    <Group width={dimension} height={dimension} x={dimension / 1.5} y={dimension / 1.5}>
      <Circle fill='#EFF1F3' height={dimension} width={dimension} stroke='#888' strokeWidth={3} />
      <ClockHand hand='hour' rotation={hourRotation}/>
      <ClockHand hand='minute' rotation={minuteRotation}/>
    </Group>
      );
};
