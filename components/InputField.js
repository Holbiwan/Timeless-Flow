import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

import { View } from './View';
import { Icon } from './Icon';
import { Button } from './Button';
import { Colors } from '../../config';

/**
 * TextInput Component
 * A customizable input field with optional left and right icons.
 * @param {string} width - Width of the input field.
 * @param {string} leftIconName - Name of the icon to display on the left.
 * @param {string} rightIcon - Name of the icon to display on the right.
 * @param {function} handlePasswordVisibility - Callback for right icon press.
 * @param {object} otherProps - Additional props for the TextInput component.
 */
export const TextInput = ({
  width = '100%',
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width }]}>
      {/* Left Icon */}
      {leftIconName && (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.mediumGray}
          style={styles.leftIcon}
        />
      )}

      {/* Text Input */}
      <RNTextInput
        style={styles.input}
        placeholderTextColor={Colors.mediumGray}
        accessibilityRole="textbox" // Improves accessibility
        accessibilityLabel="Input field" // Descriptive label
        {...otherProps}
      />

      {/* Right Icon/Button */}
      {rightIcon && (
        <Button onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.mediumGray}
            style={styles.rightIcon}
          />
        </Button>
      )}
    </View>
  );
};

// PropTypes for validation
TextInput.propTypes = {
  width: PropTypes.string, // Width of the input field (e.g., '100%', '50%')
  leftIconName: PropTypes.string, // Name of the left icon
  rightIcon: PropTypes.string, // Name of the right icon
  handlePasswordVisibility: PropTypes.func, // Function to toggle password visibility
};

// Default props for fallback values
TextInput.defaultProps = {
  width: '100%',
  leftIconName: null,
  rightIcon: null,
  handlePasswordVisibility: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: Colors.black,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
});
