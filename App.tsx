/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <View>
            <Text>Hello,World</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default App;
