# Timeless Flow  🚀 Mobile app 

### **"Bridging the gap with timeless talent”** 

![Timeless gif pres](https://zupimages.net/up/25/05/ha2s.gif)

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
expo start

or

yarn start

```

To create a local build or use a development build:
```bash
# Build for Android
npx expo run:android

# Build for iOS
npx expo run:ios
```

```plaintext
holbiwan-timeless-flow/
├── README.md
├── App.js
├── Index.js
├── LICENSE
├── app.config.js
├── babel.config.js
├── metro.config.js
├── package.json
├── .yarnrc.yml
├── android/
│   ├── gradle.properties
│   ├── gradlew*
│   ├── app/
│   │   ├── src/
│   │   │   ├── debug/AndroidManifest.xml
│   │   │   └── main/
│   │   │       ├── AndroidManifest.xml
│   │   │       ├── java/com/timeless/flow/
│   │   │       │   ├── MainActivity.kt
│   │   │       │   └── MainApplication.kt
│   │   │       └── res/
│   │   │           ├── drawable/ (logos, assets XML)
│   │   │           ├── mipmap-*/ (icons for various resolutions)
│   │   │           └── values/ (XML resources)
│   └── gradle/wrapper/gradle-wrapper.properties
├── assets/
│   ├── fonts/ (custom fonts)
│   ├── icons/
│   └── images/
├── components/
│   ├── Button.js
│   ├── FormErrorMessage.js
│   ├── Icon.js
│   ├── InputField.js
│   ├── JobCard.js
│   ├── LoadingIndicator.js
│   └── index.js
├── config/
│   ├── authConfig.js
│   ├── firebaseConfig.js
│   └── theme.js
├── hooks/
│   └── useTogglePasswordVisibility.js
├── navigation/
│   ├── AppStack.js
│   ├── AuthStack.js
│   ├── RootNavigator.js
│   └── index.js
├── screens/
│   ├── FeedbackScreen.js
│   ├── ForgotPasswordScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   └── SignupScreen.js
├── src/
│   └── providers/
│       ├── AuthenticatedUserProvider.js
├── utils/
    ├── helpers.js
    ├── validation.js
    └── yup.js

```

## Technologies Used

- **Expo SDK**: For mobile app development
- **Firebase**: Backend for authentication and data
- **React Navigation**: Screen and route management
- **Firestore**: Flexible database and create requests
- **Jest**: Unit tests
- **Figma**: Design UI UX

### License

This application is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

```

Developed with by **Sabrina PAPEAU**.
```

## Social Media

- **X (ex Twitter)**: [https://x.com/Holbiwan_Place](https://x.com/Holbiwan_Place)  
- **LinkedIn**: [https://linkedin.com/in/sabrina-papeau](https://linkedin.com/in/sabrina-papeau)  
- **Facebook**: [https://www.facebook.com/Holbiwan.Saby](https://www.facebook.com/Holbiwan.Saby)  
- **Instagram**: [https://www.instagram.com/holbiwan.saby/](https://www.instagram.com/holbiwan.saby/)  
