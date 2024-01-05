import React from "react"
import { Text, View } from "react-native"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import { Route, Routes, Navigate } from "react-router-native"



const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/signin' element={<Text>Sign In</Text>} />
        <Route path='/' element={<RepositoryList />} />
        <Route path='#' element={<Navigate to='/' />} />
      </Routes>
    </View>
  )
}

export default Main
