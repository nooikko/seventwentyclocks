import { Layer } from 'react-konva';
import { StyledStage } from './styles';
import { Clock, ClockContext } from '../';
import { useContext } from 'react';

export const ClockCanvas = () => {
  const { times, dimension } = useContext(ClockContext);
  return (
    <StyledStage height={window.innerHeight} width={window.innerWidth}>
      <Layer>
        {times.map(({ hour, minute, row, column }) =>
        <Clock
          key={`${hour}-${minute}`}
          hour={hour}
            minute={minute}
            xPos={row * dimension}
            yPos={column * dimension}
        />)}
      </Layer>
    </StyledStage>
  );
};
