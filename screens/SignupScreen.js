// SignupScreen.js
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, InputField, Logo, Button, FormErrorMessage } from "../components";
import { Colors, auth } from "../config";
import { signupValidationSchema } from '../utils/yup';
import { useTogglePasswordVisibility } from "../hooks";

export const SignupScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } = useTogglePasswordVisibility();

  const handleSignup = (values) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password).catch((error) => setErrorState(error.message));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.screenTitle}>Create a new account!</Text>
        </View>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signupValidationSchema}
          onSubmit={handleSignup}
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
              <Button style={styles.button} onPress={handleSubmit} title="Signup" />
            </>
          )}
        </Formik>
        <Button
          borderless
          title="Already have an account?"
          onPress={() => navigation.navigate("Login")}
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
