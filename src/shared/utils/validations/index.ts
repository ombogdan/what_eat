export const EMAIL_VALIDATION_PATTERN =
  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const PASSWORD_VALIDATION_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
export const PHONE_VALIDATION_PATTERN =
  /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

export const NUMBER_VALIDATION_PATTERN = /^\d+$/;
export const VALIDATION_REQUIRED_FIELD = {
  value: true,
  message: 'This field is required',
};
export const VALIDATION_EMAIL_FIELD = {
  value: EMAIL_VALIDATION_PATTERN,
  message: 'The email is not valid',
};
export const VALIDATION_PHONE_FIELD = {
  value: PHONE_VALIDATION_PATTERN,
  message: 'The phone number is not valid',
};

export const VALIDATION_PASSWORD_FIELD = {
  value: PASSWORD_VALIDATION_PATTERN,
  message:
    'The password entered is not valid. The password must have at least 1 lowercase, 1 uppercase, 1 special symbol, and 1 number',
};
export const VALIDATION_CUSTOM_NUMBER_FIELD = {
  value: NUMBER_VALIDATION_PATTERN,
  message: 'Number is not valid',
};

export const MAX_NUMBER_500 = 500;
export const MIN_NUMBER_1 = 1;

export const MAX_LENGTH_255 = 255;
export const MAX_LENGTH_100 = 100;
export const MAX_LENGTH_3 = 3;
export const MAX_LENGTH_5 = 5;
export const MAX_LENGTH_15 = 15;

export const MAXIMUM_BIRTH_DATE = new Date(
  new Date().setFullYear(new Date().getFullYear() - 10),
);

export { validationRules } from './rules';
