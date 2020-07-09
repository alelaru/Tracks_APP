import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Spacer from "../components/Spacer";

function NavLink({ navigation, text, routeName }) {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
    alignSelf: "center",
    fontSize: 18,
  },
});

export default withNavigation(NavLink);
