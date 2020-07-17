import React, { useContext } from "react";
import { Text, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

function AccountScreen({ navigation }) {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Account Screen</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

AccountScreen.navigationOptions = {
  tabBarIcon: <MaterialIcons name="account-circle" size={24} color="black" />,
};

export default AccountScreen;
