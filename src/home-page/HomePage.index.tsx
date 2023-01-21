import React from 'react';
import {Text, View, SectionList, StyleSheet, StatusBar} from 'react-native';
import DATA from '../../mocks/homepage.mock.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 10,
    marginVertical: 4,
  },
  header: {
    fontSize: 14,
    backgroundColor:'#FFF',
    paddingVertical:15
  },
  title: {
    fontSize: 14,
  },
});


const HomePage = (): JSX.Element => {
  return (
    <View style={{flex:1, padding:15, backgroundColor:'#fff'}}>
      <SectionList
      sections={DATA}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => item.label + index}
      renderItem={({item}) => (
        <View style={[styles.item, {backgroundColor: item.listColor}]}>
          <Text style={[styles.title, {color: item.textColor}]}>{item.label}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    </View>
  );
};

export default HomePage;
