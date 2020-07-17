import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";

function TrackListScreen({ navigation }) {
  // Once fetch all the data will be available as the state
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks}></NavigationEvents>
      <Text>Hola</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name}></ListItem>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <Button
        title="GO to Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </>
  );
}

const styles = StyleSheet.create({});

export default TrackListScreen;
