import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

function AuthForm({ headerText, errorMessage, submitButtonTitle, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
        {errorMessage ? (
          <Text style={styles.errorMess}>{errorMessage}</Text>
        ) : null}
        <Button
          title={submitButtonTitle}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
  errorMess: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default AuthForm;
