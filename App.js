import React from "react"
import { NativeRouter as Router } from "react-router-native"
import Main from "./src/components/Main"
import { StatusBar } from "expo-status-bar"

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Router>
        <Main />
      </Router>
    </>
  )
}

export default App;