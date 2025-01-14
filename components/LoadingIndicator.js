import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { Colors } from '../config';
import { View } from './View';

/**
 * LoadingIndicator Component
 * Displays a spinner to indicate loading state.
 * @param {string} size - The size of the spinner ('small' | 'large').
 * @param {string} color - The color of the spinner.
 * @param {object} style - Additional styles for the container.
 */
export const LoadingIndicator = ({ size = 'large', color = Colors.orange, style = {} }) => {
  return (
    <View style={[styles.container, style]} accessibilityLabel="Loading">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

// PropTypes for better validation
LoadingIndicator.propTypes = {
  size: PropTypes.oneOf(['small', 'large']), // Size can only be 'small' or 'large'
  color: PropTypes.string, // Color should be a valid color string
  style: PropTypes.object, // Custom styles for the container
};

// Default props for fallback values
LoadingIndicator.defaultProps = {
  size: 'large',
  color: Colors.orange,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
