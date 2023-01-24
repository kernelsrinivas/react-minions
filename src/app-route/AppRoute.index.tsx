import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailPage from '../detail-page/DetailPage.index';
import HomePage from '../home-page/HomePage.index';
import ListPage from '../list-page/ListPage.index';
import LoginPage from '../login-page/LoginPage.index';
import PaymentPage from '../payment-page/Payment.index';
import VideoPlayer from '../video-player/VideoPlayer.index';

const Stack = createStackNavigator();

const AppRoute = (): JSX.Element => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Details" component={DetailPage} />
          <Stack.Screen name="List" component={ListPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Payment" component={PaymentPage} />
          <Stack.Screen name="Video" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppRoute;
