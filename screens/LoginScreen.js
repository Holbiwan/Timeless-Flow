
//LoginScreen.js
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, InputField, Logo, Button, FormErrorMessage } from "../components";
import { Colors, auth } from "../config";
import { loginValidationSchema } from '../utils/yup';
import { useTogglePasswordVisibility } from "../hooks";

export const LoginScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } = useTogglePasswordVisibility();

  const handleLogin = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).catch((error) => setErrorState(error.message));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.screenTitle}>Welcome back!</Text>
        </View>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <>
              <InputField
                name="email"
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <FormErrorMessage error={errors.email} visible={touched.email} />
              <InputField
                name="password"
                placeholder="Enter password"
                autoCapitalize="none"
                secureTextEntry={passwordVisibility}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                rightIcon={rightIcon}
                handlePasswordVisibility={handlePasswordVisibility}
              />
              <FormErrorMessage error={errors.password} visible={touched.password} />
              {errorState !== "" && <FormErrorMessage error={errorState} visible />}
              <Button style={styles.button} onPress={handleSubmit} title="Login" />
            </>
          )}
        </Formik>
        <Button
          borderless
          title="Create a new account?"
          onPress={() => navigation.navigate("Signup")}
        />
        <Button
          borderless
          title="Forgot Password?"
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black, padding: 16 },
  logoContainer: { alignItems: "center" },
  screenTitle: { fontSize: 24, fontWeight: "bold", color: Colors.white, marginVertical: 16 },
  button: { marginVertical: 16, backgroundColor: Colors.primary },
});
