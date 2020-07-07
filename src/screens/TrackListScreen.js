import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text>Hola</Text>
      <Button
        title="GO to Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TrackListScreen;
