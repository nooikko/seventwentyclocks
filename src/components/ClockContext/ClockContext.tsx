import React, { createContext, useState } from 'react';
import { generateTimes } from './helpers';
import { ClockContextI } from '../../types';
import { useTime } from '../hooks';
import { DateTime } from 'luxon';

export const ClockContext = createContext<ClockContextI>({
  dimension: 125,
  times: [],
  rowCount: 20,
  now: DateTime.local(),
});

export const ClockContextProvider: React.FC = ({ children }) => {
  const now = useTime();
  const [rowCount] = useState(20);
  const times = generateTimes(true, rowCount);

  return (
    <ClockContext.Provider value={{
      dimension: 125,
      times,
      rowCount,
      now,
    }}>
      {children}
    </ClockContext.Provider>
  );
};
