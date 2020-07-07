import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign up for Tracker </Text>
      </Spacer>
      <Input label="Email"></Input>
      <Spacer />
      <Input label="Password"></Input>
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
