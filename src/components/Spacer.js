import React from "react";
import { View, StyleSheet } from "react-native";

// You put inside to wrap an existing element and wrap it
function Spacer({ children }) {
  return <View style={styles.spacer}>{children}</View>;
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
