import "../_mockLocation.js";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation.js";
import { NavigationEvents, withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm.js";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, updateLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      updateLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />

      {err ? <Text>Please grant us location access</Text> : null}
      <TrackForm></TrackForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
