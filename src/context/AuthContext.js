import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

// Make api request with the email and password
// If we signup, modify our state and say we are authenticated
// Send the screen to the other one
// If sign up failed we need to return an error
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("toke", response.data.token);
    dispatch({
      type: "signup",
      payload: response.data.token,
    });
    navigate("TrackList");
  } catch (err) {
    //   We call it everytime we want to update our state
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //   Try to sign in
    //   Handling Success
    //   Handle errors
  };
};

const signout = (dispatch) => {
  return () => {
    //   signout
  };
};

// No token no login
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
