import React, {createContext} from 'react';

interface ClockContextI {
  dimension: number;
}

export const ClockContext = createContext<ClockContextI>({
  dimension: 125,
});

export const ClockContextProvider: React.FC = ({children}) => {

  return (
    <ClockContext.Provider value={{
      dimension: 125,
    }}>
      {children}
    </ClockContext.Provider>
  );
};
