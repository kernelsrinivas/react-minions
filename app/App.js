/**
 * Sample React Native App
 * https://github.com/kernelsrinivas/react-minions
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text>React Minions</Text>
        </View>
      </React.Fragment>
    );
  }
}