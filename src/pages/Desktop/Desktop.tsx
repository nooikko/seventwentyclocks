import { ClockContextProvider, ClockCanvas } from '../../components';

export const Desktop = () => {
  return (
    <ClockContextProvider>
      <ClockCanvas />
    </ClockContextProvider>
  );
};
