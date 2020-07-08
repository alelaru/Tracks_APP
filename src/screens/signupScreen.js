import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

function SignupScreen({ navigation }) {
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
        <Button title="Sign up" />
      </Spacer>
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
