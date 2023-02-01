export const weightConvertation = (value: string, measurement: string) => {
  // eslint-disable-next-line no-restricted-globals
  const floatValue = !isNaN(parseFloat(value)) ? parseFloat(value) : false;
  if (!floatValue) {
    return '';
  }
  if (measurement === 'KG') {
    return (floatValue / 2.2).toFixed(0);
  }
  if (measurement === 'LB') {
    return (floatValue * 2.2).toFixed(0);
  }
};

export const userWeightInKg = (weight: string, measurement = '') =>
  Math.round(
    parseInt(weight) * (measurement.toLowerCase() === 'kg' ? 1 : 0.45359237),
  );
