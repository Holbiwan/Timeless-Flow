import { useState } from 'react';

/**
 * Custom hook to manage password and confirm password visibility
 * @returns {object} - Contains visibility states and handlers for password and confirm password fields
 */
export const useTogglePasswordVisibility = () => {
  // States for password visibility and icon
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);

  // States for the right icons
  const [passwordIcon, setPasswordIcon] = useState('eye');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('eye');

  /**
   * Toggles visibility and updates the icon for the given field
   * @param {string} field - Field to toggle ('password' or 'confirmPassword')
   */
  const toggleVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisibility(!passwordVisibility);
      setPasswordIcon(passwordVisibility ? 'eye-off' : 'eye');
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
      setConfirmPasswordIcon(confirmPasswordVisibility ? 'eye-off' : 'eye');
    }
  };

  return {
    passwordVisibility,
    confirmPasswordVisibility,
    passwordIcon,
    confirmPasswordIcon,
    togglePasswordVisibility: () => toggleVisibility('password'),
    toggleConfirmPasswordVisibility: () => toggleVisibility('confirmPassword'),
  };
};
