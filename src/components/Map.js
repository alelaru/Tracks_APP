import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
// When we need to access information we use the Provider and useContext

function Map() {
  // This is how you access the state
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      ></Circle>
      <Polyline coordinates={locations.map((loc) => loc.coords)}></Polyline>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
