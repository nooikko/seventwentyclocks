import React, { createContext, useEffect, useRef, useState } from 'react';
import { generateTimes, get12HourTime } from './helpers';
import { ClockContextI } from '../../types';
import { DateTime } from 'luxon';
import { useWindowSize } from '../hooks';

export const getMinScale = (xSize: number, ySize: number, windowHeight: number, windowWidth: number, dimension: number) => {
  const xScale = windowWidth / (xSize + dimension + (dimension / 3));
  const yScale = windowHeight / (ySize + dimension + (dimension / 3));

  return xScale < yScale ? xScale : yScale;
};

export const ClockContext = createContext<ClockContextI>({
  dimension: 125,
  times: [],
  rowCount: 20,
  now: DateTime.local(),
  setNow: () => null,
  stage: undefined,
  hour: 0,
  minute: 0,
  canvasSize: {
    x: 0,
    y: 0,
  },
  minScale: 0,
});

export const ClockContextProvider: React.FC = ({ children }) => {
  const stage = useRef<any>();
  const { windowWidth, windowHeight } = useWindowSize();
  const [dimension] = useState(125);
  const [rowCount] = useState(35);
  const [times, setTimes] = useState<ClockContextI['times']>([]);
  const [now, setNow] = useState<DateTime>(DateTime.local());
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [minScale, setMinScale] = useState<number>(0.25);
  const [canvasSize, setCanvasSize] = useState({
    x: 0,
    y: 0,
  });

  if (!times.length) {
     setTimes(generateTimes(true, rowCount, dimension));
  }

  useEffect(() => {
    setHour(get12HourTime(now.hour));
    setMinute(now.minute);
  }, [now]);

  useEffect(() => {
    if (times.length) {
      const lastTime = times[times.length - 1];

      setCanvasSize({
        x: lastTime.xPos,
        y: lastTime.yPos,
      });
    }
  }, [times]);

  useEffect(() => {
    setMinScale(getMinScale(canvasSize.x, canvasSize.y, windowHeight, windowWidth, dimension));
  }, [windowHeight, windowWidth, canvasSize.x, canvasSize.y, dimension]);

  return (
    <ClockContext.Provider value={{
      dimension,
      times,
      rowCount,
      now,
      setNow,
      stage,
      hour,
      minute,
      canvasSize,
      minScale,
    }}>
      {children}
    </ClockContext.Provider>
  );
};
