import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

function SigninScreen() {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In Your Account"
        errorMessage={state.errorMessage}
        submitButtonTitle="Sign In"
        onSubmit={signin}
      ></AuthForm>
      <NavLink
        text="You don't have an account, Sign Up"
        routeName="Signup"
      ></NavLink>
    </View>
  );
}

// This can be tied to a function or not
SigninScreen.navigationOptions = () => {
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
export default SigninScreen;
