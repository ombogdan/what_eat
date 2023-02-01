import { DEFAULT_FTP } from 'shared/constants';

export const getPowerZone = (selectedResult: number, power: number) => {
  const value = power / selectedResult;
  if (Number(value) === 0 || Number(selectedResult) === DEFAULT_FTP) {
    return 0;
  }
  if (value < 0.6) {
    return 1;
  }
  if (value < 0.85) {
    return 2;
  }
  if (value < 1.05) {
    return 3;
  }
  if (value < 1.2) {
    return 4;
  }
  return 5;
};
