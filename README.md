# 🛠️Mobile app -  Work in Progress
<img src="https://zupimages.net/up/25/04/w3lt.png" alt="En cours de production" width="500"/>

# Timeless Flow  🚀

### **"Bridging the gap with timeless talent”** 

<img src="https://zupimages.net/up/25/02/dn9f.png" alt="En cours de production" width="300"/>

![Supports Expo iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)
![Supports Expo Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)  
-
[![Runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

**Timeless Flow** is a mobile application developed with **Expo** and **Firebase**, offering essential features for modern and intuitive management. This app includes login, signup, password reset, and secure home screens.

## Main Features

- **Login and Signup with Firebase**
- Password reset via email
- User state management with Context API
- Form validation with Formik and Yup
- Protected navigation with `react-navigation`
- Reusable and custom components
- Environment variable management with `dotenv`

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Holbiwan/Timeless-Flow.git
   cd Timeless-Flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
## Running the Project

To start the development server:
```bash
npx expo start
```

To create a local build or use a development build:
```bash
# Build for Android
npx expo run:android

# Build for iOS
npx expo run:ios
```

## Project Structure

```plaintext
Timeless Flow
├── assets            # Static assets (images, fonts, etc.)
├── components        # Reusable UI components
│   └── Button.js
│   └── TextInput.js
│   └── LoadingIndicator.js
├── config            # Configuration files
│   └── firebase.js   # Firebase configuration
│   └── theme.js      # App theme (colors, styles)
├── navigation        # Navigation management
│   └── AppStack.js   # Protected routes
│   └── AuthStack.js  # Authentication routes
├── screens           # Main app screens
│   └── LoginScreen.js
│   └── SignupScreen.js
│   └── HomeScreen.js
├── App.js            # Application entry point
└── app.config.js     # Expo configuration
```

## Screenshots

### Login Screen


### Successful Signup


### Password Reset


### Field Validation


## Technologies Used

- **Expo SDK**: For mobile app development
- **Firebase**: Backend for authentication and data
- **React Navigation**: Screen and route management
- **Firestore**: Flexible database and create requests
- **Jest**: Unit tests
- **Figma**: Design UI UX

## License

This application is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Developed with by **Sabrina PAPEAU**.

### Social Media

X (ex twitter)   : <https://x.com/Holbiwan_Place> 
LinkedIn         : <https://linkedin.com/in/sabrina-papeau> 
Facebook         : <https://www.facebook.com/Holbiwan.Saby> 
Instagram        : <https://www.instagram.com/holbiwan.saby/> 
