export interface ClockContextI {
  dimension: number;
  times: {
    hour: number;
    minute: number;
  }[];
}