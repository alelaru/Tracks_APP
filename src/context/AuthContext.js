import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // Make api request with the email and password
    // If we signup, modify our state and say we are authenticated
    // If sign up failed we need to return an error
  };
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

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
