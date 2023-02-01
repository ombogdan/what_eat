export const validationRules = {
  heightCM: {
    max: {
      value: 300,
      message: 'The height must not be greater than 300.',
    },
  },
  heightInch: {
    max: {
      value: 118,
      message: 'The height must not be greater than 118.',
    },
  },
  weightLb: {
    max: {
      value: 660,
      message: 'The weight must not be greater than 660.',
    },
  },
  weightKg: {
    max: {
      value: 300,
      message: 'The weight must not be greater than 300.',
    },
  },
  heart_rate: {
    max: {
      value: 220,
      message: 'The max heart rate must not be greater than 220.',
    },
  },
  ftp: {
    max: {
      value: 500,
      message: 'The max heart rate must not be greater than 500.',
    },
    min: {
      value: 25,
      message: 'Maximum heart rate should not be less than 25.',
    },
  },
};
