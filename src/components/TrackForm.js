import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer />
      <Input
        value={name}
        placeholder={"Enter the name of the track"}
        onChangeText={changeName}
      ></Input>
      <Spacer />
      {recording ? (
        <Button title="Stop" onPress={stopRecording}></Button>
      ) : (
        <Button title="Start Recording" onPress={startRecording}></Button>
      )}
    </>
  );
}

export default TrackForm;
