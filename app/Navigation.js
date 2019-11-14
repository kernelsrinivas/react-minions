import React from 'react';
import {
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';

import HomePage from './containers/Home/HomePage';
import AboutPage from './containers/About/AboutPage';
import ProductPage from './containers/Product/ProductPage';
import ServicePage from './containers/Service/ServicePage';
import SupportPage from './containers/Support/SupportPage';
import ContactPage from './containers/Contact/ContactPage';
import FagPage from './containers/FAG/FagPage';

const headerStyle = {
  marginTop: 23
};

const RootStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      title: 'Home',
      header: null,
    }),
  },
  About: {
    screen: AboutPage,
    navigationOptions: () => ({
      title: 'Home > About',
      headerStyle
    }),
  },
  Product: {
    screen: ProductPage,
    navigationOptions: () => ({
      title: 'Home > Product',
      headerStyle
    }),
  },
  Service: {
    screen: ServicePage,
    navigationOptions: () => ({
      title: 'Home > Service',
      headerStyle
    }),
  },
  Support: {
    screen: SupportPage,
    navigationOptions: () => ({
      title: 'Home > Support',
      headerStyle
    }),
  },
  Contact: {
    screen: ContactPage,
    navigationOptions: () => ({
      title: 'Home > Contact',
      headerStyle
    }),
  },
  FAG: {
    screen: FagPage,
    navigationOptions: () => ({
      title: 'Home > FAG',
      headerStyle
    }),
  },
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;