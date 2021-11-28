import { Layer } from 'react-konva';
import { StyledStage } from './styles';
import { Clock, ClockContext } from '../';
import { useContext, useEffect } from 'react';
import { useTime, useWindowSize } from '../hooks';

export const ClockCanvas = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const { times, setNow, stage, hour, minute, minScale, dimension } = useContext(ClockContext);
  const currentTime = useTime();

  useEffect(() => {
    if (currentTime.toFormat('h:m') !== `${hour}:${minute}`) {
      setNow(currentTime);
    }
  });

  return (
    <StyledStage
      height={windowHeight}
      width={windowWidth}
      x={(dimension / 1.5) * minScale}
      y={(dimension / 1.5) * minScale}
      ref={stage}
      scale={{
        x: minScale,
        y: minScale,
      }}
    >
      <Layer>
        {times.map(({ hour: clockHour, minute: clockMinute, xPos, yPos }) =>
        <Clock
            key={`${clockHour}-${clockMinute}`}
            hour={clockHour}
            minute={clockMinute}
            xPos={xPos}
            yPos={yPos}
            current={hour === clockHour && minute === clockMinute}
        />)}
      </Layer>
    </StyledStage>
  );
};
