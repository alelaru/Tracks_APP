// import "../_mockLocation.js";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { updateLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          updateLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
