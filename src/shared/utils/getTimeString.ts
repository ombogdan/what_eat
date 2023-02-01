export const getTimeString = (time: number) =>
  `${Math.floor(time / 60)}:${time % 60 > 9 ? time % 60 : `0${time % 60}`}`;
