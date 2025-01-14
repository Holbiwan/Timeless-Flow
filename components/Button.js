import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

import { Colors } from '../config';

/**
 * Custom Button Component
 * @param {string} title - The text to display on the button (for borderless buttons).
 * @param {function} onPress - Callback for button press.
 * @param {boolean} borderless - If true, displays a text-only button.
 * @param {number} activeOpacity - Opacity of the button when pressed.
 * @param {React.Node} children - Content inside the button for non-borderless buttons.
 * @param {object} style - Custom styles for the button.
 */
export const Button = ({
  children,
  onPress,
  activeOpacity = 0.3,
  borderless = false,
  title = '',
  style = {},
}) => {
  // Memoized style function to handle pressed state dynamically
  const _style = useCallback(
    ({ pressed }) => [
      style,
      { opacity: pressed ? activeOpacity : 1 },
    ],
    [style, activeOpacity]
  );

  // Render borderless button
  if (borderless) {
    return (
      <Pressable 
        onPress={onPress} 
        style={_style}
        accessibilityRole="button" // Improves accessibility
        accessibilityLabel={title} // For screen readers
      >
        <Text style={styles.borderlessButtonText}>{title}</Text>
      </Pressable>
    );
  }

  // Render default button with children
  return (
    <Pressable 
      onPress={onPress} 
      style={_style}
      accessibilityRole="button" // Improves accessibility
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderlessButtonText: {
    fontSize: 16,
    color: Colors.blue,
    fontWeight: '600', // Improves visibility
  },
});
