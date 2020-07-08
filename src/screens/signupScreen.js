import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

function SignupScreen({ navigation }) {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign up for Tracker </Text>
      </Spacer>
      <Input
        label="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      ></Input>
      <Spacer />
      <Input
        label="Password"
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      ></Input>
      <Spacer>
        {state.errorMessage ? (
          <Text style={styles.errorMess}>{state.errorMessage}</Text>
        ) : null}
        <Button title="Sign up" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already had an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
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
  errorMess: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: "blue",
    alignSelf: "center",
  },
});

export default SignupScreen;
