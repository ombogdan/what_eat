export const getHBZone = (maxHB: number, hb: number) => {
  if (hb <= 0) return;

  const value = hb / maxHB;
  if (value < 0.5) {
    return 0;
  }
  if (value < 0.65) {
    return 1;
  }
  if (value < 0.8) {
    return 2;
  }
  if (value < 0.85) {
    return 3;
  }
  if (value < 0.92) {
    return 4;
  }
  return 5;
};
