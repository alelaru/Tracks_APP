import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polygon } from "react-native-maps";

function TrackDetailScreen({ navigation }) {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((element) => element._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text h2>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polygon
          coordinates={track.locations.map((loc) => loc.coords)}
        ></Polygon>
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
