import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';

const AppView = props => {
    return Platform.OS === 'android'?<View {...props}></View>:<SafeAreaView {...props}></SafeAreaView>;
}
export default AppView;