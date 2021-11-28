import React, { createContext, useState } from 'react';
import { generateTimes } from './helpers';
import { ClockContextI } from '../../types';

export const ClockContext = createContext<ClockContextI>({
  dimension: 125,
  times: [],
  rowCount: 20,
});

export const ClockContextProvider: React.FC = ({ children }) => {
  const [rowCount] = useState(35);
  const times = generateTimes(true, rowCount);

  return (
    <ClockContext.Provider value={{
      dimension: 125,
      times,
      rowCount,
    }}>
      {children}
    </ClockContext.Provider>
  );
};
