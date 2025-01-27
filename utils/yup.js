// utils/yup.js
import * as Yup from 'yup';

// Validation schema for login form
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// Validation schema for signup form
export const signupValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

// Validation schema for password reset
export const passwordResetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});
