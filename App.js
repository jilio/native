// @flow

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import initStore from './store'
import TestButton from './components/TestButton'
import TestTextField from './components/TestTextField'

type Props = {}

const { store, persistor } = initStore()

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <TestTextField />
            <TestButton caption="SAVE" />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
