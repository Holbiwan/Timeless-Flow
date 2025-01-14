import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';

import { Images } from '../config';

/**
 * Logo Component
 * Displays the app logo or a custom image.
 * @param {string|object} uri - URI or local image source.
 * @param {number} width - Width of the logo (default is 200).
 * @param {number} height - Height of the logo (default is 200).
 */
export const Logo = ({ uri, width = 200, height = 200 }) => {
  return (
    <Image
      source={uri || Images.defaultLogo} // Use uri if provided, fallback to default logo
      style={[styles.image, { width, height }]}
      accessibilityRole="image" // Accessible role for screen readers
      accessibilityLabel="App Logo" // Description for screen readers
    />
  );
};

// PropTypes for validation
Logo.propTypes = {
  uri: PropTypes.oneOfType([
    PropTypes.string, // URI as a string
    PropTypes.object, // Local image source (e.g., require('./path/to/image'))
  ]),
  width: PropTypes.number, // Width of the logo
  height: PropTypes.number, // Height of the logo
};

// Default props
Logo.defaultProps = {
  uri: null,
  width: 200,
  height: 200,
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain', // Ensures the image keeps its aspect ratio
  },
});
