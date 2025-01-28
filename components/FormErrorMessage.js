import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import config from '../config';

/**
 * FormErrorMessage Component
 * Displays an error message below form inputs when validation fails.
 * @param {string} error - The error message to display.
 * @param {boolean} visible - Whether the error message should be visible.
 */
export const FormErrorMessage = ({ error = '', visible = false }) => {
  if (!error || !visible) {
    return null; // Do not render if there is no error or if it's not visible
  }

  return (
    <Text 
      style={styles.errorText}
      accessibilityRole="alert" // Ensures screen readers recognize it as an error
      accessibilityLiveRegion="assertive" // Announces the message immediately
    >
      {error}
    </Text>
  );
};

// Define PropTypes for better error checking
FormErrorMessage.propTypes = {
  error: PropTypes.string,
  visible: PropTypes.bool,
};

// Default props
FormErrorMessage.defaultProps = {
  error: '',
  visible: false,
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: Colors.red, // Highlight the error in red
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '600',
  },
});

