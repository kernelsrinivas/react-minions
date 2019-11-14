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
import Navigation from './Navigation';

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <Navigation/>
      </React.Fragment>
    );
  }
}