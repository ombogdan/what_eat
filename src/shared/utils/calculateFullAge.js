import { parse, intervalToDuration } from 'date-fns';

export const calculateFullAge = (dob, parseFormat = 'yyyy-MM-dd') => {
  const birthDate = parse(dob, parseFormat, new Date());
  const { years, months, days } = intervalToDuration({
    start: birthDate,
    end: new Date(),
  });
  return { years, months, days };
};
