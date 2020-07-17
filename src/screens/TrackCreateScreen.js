import "../_mockLocation.js";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation.js";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm.js";
import { FontAwesome } from "@expo/vector-icons";

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

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus-circle" size={24} color="black" />,
};

export default withNavigationFocus(TrackCreateScreen);
