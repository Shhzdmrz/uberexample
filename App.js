import Reactotron from 'reactotron-react-native'
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

Reactotron
.configure() // controls connection & communication settings
.useReactNative() // add all built-in react native plugins
.connect() 

import store from './src/store';
import AppRouter from './src/containers/AppRouter';

export default class App extends React.Component {

  componentDidMount () {
    Reactotron.connect()
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}