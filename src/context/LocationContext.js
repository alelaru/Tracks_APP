import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case defaul:
      return state;
  }
};

const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const updateLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { updateLocation, startRecording, stopRecording },
  { recording: false, locations: [], currentLocation: null }
);
