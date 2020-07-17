import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  //   console.log(locations.length);

  return (
    <>
      <Input
        value={name}
        placeholder={"Enter the name of the track"}
        onChangeText={changeName}
      ></Input>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording}></Button>
        ) : (
          <Button title="Start Recording" onPress={startRecording}></Button>
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save recording" onPress={saveTrack}></Button>
        ) : null}
      </Spacer>
    </>
  );
}

export default TrackForm;
