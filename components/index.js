// Index.js - Entry point for all reusable components
// This file centralizes all the exports for easier imports in other parts of the app

import { InputField } from './InputField'; // Updated to replace TextInput
import { Logo } from './Logo';
import { Icon } from './Icon';
import { Button } from './Button';
import { FormErrorMessage } from './FormErrorMessage';
import { LoadingIndicator } from './LoadingIndicator';

// Export all components for easier imports
export {
  InputField,         // Custom input fields
  Logo,               // Application logo
  Icon,               // Customizable icons
  Button,             // Buttons with dynamic styles
  FormErrorMessage,   // Error messages for forms
  LoadingIndicator,   // Loader for asynchronous tasks
};
