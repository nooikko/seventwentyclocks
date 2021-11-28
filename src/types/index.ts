import { DateTime } from 'luxon';

export interface ClockContextI {
  dimension: number;
  times: {
    hour: number;
    minute: number;
    row: number;
    column: number;
  }[];
  rowCount: number;
  now: DateTime;
}