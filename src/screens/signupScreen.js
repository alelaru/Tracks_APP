import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

function SignupScreen({ navigation }) {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  // CHecking authenthication with inside token

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracking"
        errorMessage={state.errorMessage}
        submitButtonTitle="Sign Up"
        onSubmit={signup}
      ></AuthForm>
      <NavLink
        text="Already have an account? Sign in"
        routeName="Signin"
      ></NavLink>
    </View>
  );
}

// This can be tied to a function or not
SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

export default SignupScreen;
