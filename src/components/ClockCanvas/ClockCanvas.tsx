import { Layer } from 'react-konva';
import { StyledStage } from './styles';
import { Clock } from '../';

export const ClockCanvas = () => {
  return (
    <StyledStage height={window.innerHeight} width={window.innerWidth}>
      <Layer>
        <Clock hour={11} minute={36} />
      </Layer>
    </StyledStage>
  );
};
