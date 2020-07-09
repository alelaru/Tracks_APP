import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

function Map() {
  return (
    <View>
      <Text>I am a map</Text>
      <MapView style={styles.map}>
        <Polyline></Polyline>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    justifyContent: "center",
  },
});

export default Map;
