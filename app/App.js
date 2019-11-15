/**
 * Sample React Native App
 * https://github.com/kernelsrinivas/react-minions
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './redux/store';

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <StatusBar backgroundColor="transparent" barStyle="light-content" />
          <Navigation/>
        </Provider>
      </React.Fragment>
    );
  }
}