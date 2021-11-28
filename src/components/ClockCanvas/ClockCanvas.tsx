import { Layer } from 'react-konva';
import { StyledStage } from './styles';
import { Clock, ClockContext } from '../';
import { useContext } from 'react';
import { useTime, useWindowSize } from '../hooks';

const get12HourTime = (hour: number) => {
  if (hour > 12) {
    return hour - 12;
  } else if (hour === 0) {
    return 12;
  }

  return hour;
};

export const ClockCanvas = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const { times, dimension } = useContext(ClockContext);
  const now = useTime();
  return (
    <StyledStage height={windowHeight} width={windowWidth} scaleX={0.25} scaleY={0.25} x={100} y={100}>
      <Layer>
        {times.map(({ hour, minute, row, column }) =>
        <Clock
            key={`${hour}-${minute}`}
            hour={hour}
            minute={minute}
            xPos={(row * 1.2) * dimension}
            yPos={(column * 1.2) * dimension}
            current={get12HourTime(now.hour) === hour && now.minute === minute}
        />)}
      </Layer>
    </StyledStage>
  );
};
