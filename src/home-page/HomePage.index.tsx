import React, { useCallback } from 'react';
import {Text, View, SectionList, StyleSheet, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  },
  title: {
    fontSize: 14,
  },
});


interface Props {}
const HomePage = (props: Props): JSX.Element => {
  const onNavigateList = useCallback((data: any) =>{
    return (): void => {
        props?.navigation?.navigate('Video', data);
    }
  }, []);
  const onNavigateDetails = useCallback((data: any) =>{
    return (): void => {
        props?.navigation?.navigate('Details', data);
    }
  }, []);
  return (
    <View style={{flex:1, padding:15, backgroundColor:'#fff'}}>
      <SectionList
      sections={DATA}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => item.label + index}
      renderItem={({item}) => (
        <TouchableOpacity onPress={onNavigateDetails(item)}>
        <View style={[styles.item, {backgroundColor: item.listColor}]}>
          <Text style={[styles.title, {color: item.textColor}]}>{item.label}</Text>
        </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({section: {title, listPageId}}) => (
        <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFF', justifyContent:'space-between', paddingVertical:15}}>
        <Text style={styles.header}>{title}</Text>
        <TouchableOpacity onPress={onNavigateList({listPageId})}>
          <Text>{'[>]'}</Text>
        </TouchableOpacity>
        </View>
      )}
    />
    </View>
  );
};

export default HomePage;
