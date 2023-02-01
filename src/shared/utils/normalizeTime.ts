const parseZero = (time: number) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

export const normalizeTime = (time: number) =>
  `${Math.floor(Number(time) / 60)}.${parseZero(Number(time) % 60)}`;
