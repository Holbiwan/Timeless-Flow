import React from 'react';
import PropTypes from 'prop-types';
import { View as RNView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * View Component
 * A wrapper for the native View component, with optional safe area handling.
 * @param {boolean} isSafe - Whether to respect safe area insets.
 * @param {object} style - Custom styles for the container.
 * @param {React.Node} children - Child elements to render inside the view.
 */
export const View = ({ isSafe = false, style = {}, children }) => {
  const insets = useSafeAreaInsets();

  const safeStyle = isSafe
    ? {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    : {};

  return <RNView style={StyleSheet.compose(safeStyle, style)}>{children}</RNView>;
};

// PropTypes for validation
View.propTypes = {
  isSafe: PropTypes.bool, // Indicates if the view should respect safe area insets
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // Custom styles
  children: PropTypes.node, // Child elements to render inside the View
};

// Default props
View.defaultProps = {
  isSafe: false,
  style: {},
};

const styles = StyleSheet.create({});
