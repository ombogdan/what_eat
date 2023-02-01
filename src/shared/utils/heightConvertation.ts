export const heightConvertation = (value: string, measurement: string) => {
  // eslint-disable-next-line no-restricted-globals
  const floatValue = !isNaN(parseFloat(value)) ? parseFloat(value) : 1;
  if (!floatValue) {
    return '';
  }
  if (measurement === 'CM') {
    return (floatValue * 2.54).toFixed(0);
  }
  if (measurement === 'IN') {
    return (floatValue / 2.54).toFixed(0);
  }
};
