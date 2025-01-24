//index.js

// Screens
import { LoginScreen } from '../screens/LoginScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';

// Config & Theme
import { Colors } from '../config/theme';
import { Images } from '../config/images';

// Firebase services
import { auth } from '../config/firebaseConfig';

export {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  ForgotPasswordScreen,
  Colors,
  Images,
  auth,
};
