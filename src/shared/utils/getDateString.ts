export const getDateString = (date: Date) =>
  `${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}/${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }/${date.getFullYear()}`;
