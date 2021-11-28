import React, { createContext } from 'react';
import { generateTimes } from './helpers';
import { ClockContextI } from '../../types';

export const ClockContext = createContext<ClockContextI>({
  dimension: 125,
  times: [],
});

export const ClockContextProvider: React.FC = ({children}) => {
  const times = generateTimes(true);

  return (
    <ClockContext.Provider value={{
      dimension: 125,
      times,
    }}>
      {children}
    </ClockContext.Provider>
  );
};
