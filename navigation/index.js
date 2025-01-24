// Centralized config exports
// This file consolidates all configurations for easy imports elsewhere in the app

// Visual assets
import { Images } from "./images";
import { Colors } from "../config/theme";

// Firebase services
import { auth } from "./firebase";
import { LoginScreen } from "./LoginScreen";
import { SignupScreen } from "./SignupScreen";
import { HomeScreen } from "./HomeScreen";
import { ForgotPasswordScreen } from "./ForgotPasswordScreen";

export { LoginScreen, SignupScreen, HomeScreen, ForgotPasswordScreen };


export {
  Images, // App images (logos, icons, etc.)
  Colors, // Theme colors for consistent styling
  auth,   // Firebase authentication instance
};


