export const getWeightInKg = (weight: string, weight_dim: string) =>
  Math.round(parseInt(weight, 10) * (weight_dim === 'kg' ? 1 : 0.45359237));
