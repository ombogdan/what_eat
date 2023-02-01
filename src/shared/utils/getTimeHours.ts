export const getTimeHours = (time: number) => {
  const timeNew = Math.round(time / 60);
  return `${timeNew > 60 ? `${Math.floor(timeNew / 60)} h ` : ''}${
    timeNew % 60
  } m`;
};
