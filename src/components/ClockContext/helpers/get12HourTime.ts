export const get12HourTime = (hour: number) => {
  if (hour > 12) {
    return hour - 12;
  } else if (hour === 0) {
    return 12;
  }

  return hour;
};
