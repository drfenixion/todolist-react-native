import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './containers/App'

import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'

const store = configureStore()

export default class extends Component {
  render() {
    return (
      <Provider store={store}> 
        <App /> 
      </Provider>
    )
  }
}