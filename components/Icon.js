import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * Icon Component
 * A wrapper around MaterialCommunityIcons to easily use icons in the app.
 * @param {string} name - The name of the icon (from MaterialCommunityIcons).
 * @param {number} size - The size of the icon.
 * @param {string} color - The color of the icon.
 * @param {object} style - Additional styles for the icon.
 */
export const Icon = ({ name, size = 24, color = '#000', style = {} }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};

// PropTypes for better validation
Icon.propTypes = {
  name: PropTypes.string.isRequired, // Name is required because it's essential for the icon
  size: PropTypes.number, // Size of the icon (default is 24)
  color: PropTypes.string, // Color of the icon (default is black)
  style: PropTypes.object, // Custom styles for the icon
};

// Default props
Icon.defaultProps = {
  size: 24,
  color: '#000',
  style: {},
};
