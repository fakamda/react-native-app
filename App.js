import React from "react"
import { NativeRouter as Router } from "react-router-native"
import Main from "./src/components/Main"
import { StatusBar } from "expo-status-bar"

// import { ApolloProvider } from "@apollo/client"
// import createApolloClient from "./src/utils/apolloClient"

// const apolloClient = createApolloClient()

const App = () => {
  return (
    <>
    {/* <ApolloProvider client={apolloClient}> */}
      <StatusBar style="light" />
      <Router>
        <Main />
      </Router>
      {/* </ApolloProvider> */}
    </>
  )
}

export default App;