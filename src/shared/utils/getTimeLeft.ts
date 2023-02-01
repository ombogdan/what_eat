export const getTimeLeft = (timeParam: number) => {
  const time = Number(timeParam) <= 0 ? 0 : timeParam;
  return `${Math.floor(time / 60)}:${
    time % 60 > 9 ? time % 60 : `0${time % 60}`
  }`;
};
