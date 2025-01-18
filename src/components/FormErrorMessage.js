import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../config';

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
  
  The  FormErrorMessage  component is a simple component that displays an error message below form inputs when validation fails. It accepts two props:  error  and  visible . If the  error  prop is empty or the  visible  prop is  false , the component does not render. 
  The  FormErrorMessage  component uses the  Text  component from React Native to display the error message. It also sets the  accessibilityRole  to  alert  to ensure that screen readers recognize it as an error and sets the  accessibilityLiveRegion  to  assertive  to announce the message immediately. 
  The component also defines the  PropTypes  for better error checking and sets the default props for  error  and  visible . 
  Now that we have created the  FormErrorMessage  component, let’s use it in the  FormInput  component. 
  Using the FormErrorMessage Component 
  Open the  FormInput.js  file and import the  FormErrorMessage  component. Then, add the  FormErrorMessage  component below the  TextInput  component.