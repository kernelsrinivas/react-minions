import React from 'react';
import {Text} from 'react-native';
import AppView from '../AppView/AppView';
import styles from './PageStyle';

type Props = {
  info?: number
}

class Page extends React.PureComponent<Props> {
  render(){
    return (
      <>
        <AppView style={styles.container}>
          <Text>{this.props.info}</Text>
        </AppView>
      </>
    );
  }
};

Page.defaultProps = {
  info : 'Navigation Demo'
}

export default Page;