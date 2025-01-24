import * as Yup from 'yup'; // Import Yup for validation schemas

/**
 * Validation schema for login
 * Validates email and password fields
 */
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format') // Ensures email has a valid format
    .required('Email is required'), // Field must not be empty
  password: Yup.string()
    .required('Password is required'), // Field must not be empty
});

/**
 * Validation schema for signup
 * Validates email, password, and confirmPassword fields
 */
export const signupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format') // Ensures email has a valid format
    .required('Email is required'), // Field must not be empty
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long') // Minimum password length
    .required('Password is required'), // Field must not be empty
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match') // Confirms passwords match
    .required('Please confirm your password'), // Field must not be empty
});

/**
 * Validation schema for password reset
 * Validates email field
 */
export const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format') // Ensures email has a valid format
    .required('Email is required'), // Field must not be empty
});
