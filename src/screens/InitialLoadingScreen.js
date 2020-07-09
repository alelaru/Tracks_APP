import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

function InitialLoadingScreen() {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
}

export default InitialLoadingScreen;
