// Centralized config exports
// This file consolidates all configurations for easy imports elsewhere in the app

// Visual assets
import { Images } from "./images";
import { Colors } from "./theme";

// Firebase services
import { auth } from "./firebase";

export {
  Images, // App images (logos, icons, etc.)
  Colors, // Theme colors for consistent styling
  auth,   // Firebase authentication instance
};
