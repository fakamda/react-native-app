import React from "react";
import { NativeRouter as Router } from "react-router-native";
import Main from "./src/components/Main";

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App;