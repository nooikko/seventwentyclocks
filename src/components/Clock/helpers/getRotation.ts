export const getRotation = (base: number, type: 'hour' | 'minute') => {
  switch (type) {
    case 'hour':
      return ((360 / 12) * base) - 180;
    case 'minute':
      return ((360 / 60) * base) - 180;
  }
};