import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import { store } from './store';
import { Provider } from 'react-redux'
import MyStack from './navigation'
const App = () => {
  return (

    <NavigationContainer>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  }
})