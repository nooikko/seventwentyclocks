import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

const getTime = () => {
  return DateTime.local();
};

export const useTime = (refreshCycle = 100) => {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(getTime());
    }, refreshCycle);

    return () => clearInterval(intervalId);
  }, [refreshCycle]);

  return now;
};