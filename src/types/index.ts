import { DateTime } from 'luxon';

export interface ClockContextI {
  dimension: number;
  times: {
    hour: number;
    minute: number;
    row: number;
    column: number;
    xPos: number;
    yPos: number;
  }[];
  rowCount: number;
  now: DateTime;
  setNow: React.Dispatch<React.SetStateAction<DateTime>>;
  stage: any; // Need to find a better way to handle Konva Legacy Refs
  hour: number;
  minute: number;
  canvasSize: {
    x: number;
    y: number;
  }
  minScale: number;
}