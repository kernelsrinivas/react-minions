import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './GridButtonStyle';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    handler: Function,
    icon: string,
    text: string,
}

export default class GridButton extends React.PureComponent<Props> {
    render() {
        return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.squreContainer} onPress={this.props.handler}>
                <Icon name={this.props.icon} size={56} color="#F90" />
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

GridButton.defaultProps = {
    handler: ()=> { console.log("Please Add Handler")},
    icon: 'md-hand',
    text: 'label'
}