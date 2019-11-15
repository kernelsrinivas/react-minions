import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,   ImageBackground} from 'react-native';

import Page from '../../components/Page/Page';
import GridButton from '../../components/GridButton/GridButton';
import background from '../../assets/base64/background';

type Props = {}

export default class HomePage extends React.Component<Props> {

    onGoPage = (routeName) => {
        console.log('routeName', routeName);
       const { navigation } = this.props;
       navigation.navigate(routeName);
    }

  render() {
  return(
    <ImageBackground style={{width:'100%', height:'100%'}} source={{uri:background}}>
      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', marginTop:26, backgroundColor:'transparent'}}>
        <GridButton handler={() => this.onGoPage('About')} text={'Products'} icon={'ios-alert'}/>
        <GridButton handler={() => this.onGoPage('Product')} text={'Details'} icon={'md-basket'}/>
        <GridButton handler={() => this.onGoPage('Service')} text={'Orders'} icon={'md-thumbs-up'}/>
        <GridButton handler={() => this.onGoPage('Support')} text={'Checkout'} icon={'md-text'}/>
        <GridButton handler={() => this.onGoPage('Contact')} text={'Delivery'} icon={'ios-mail'}/>
        <GridButton handler={() => this.onGoPage('FAG')} text={'Thanks'} icon={'md-help-circle'}/>
      </View>
    </ImageBackground>);
  }
}