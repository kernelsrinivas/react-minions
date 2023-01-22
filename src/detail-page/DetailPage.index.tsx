import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import mockData104 from '../../mocks/functionpage.mock.json';
interface Props {

}
const data = {
  "104": mockData104
};

const Card = ({ name, classification, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.classificationText}>{classification}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

const DetailPage = (props: Props): JSX.Element => {
  
  const { params = {} } = props.route || {};
  console.log("params", params);
  const { detailPageId } = params;
  console.log("detailPageId", detailPageId); 
  const detailsData = data[detailPageId] || [];
  console.log("detailData", detailsData);
  return (
    <View style={{padding:15, backgroundColor:'#FFF'}}>
      <FlatList
      data={detailsData}
      renderItem={({ item }) => <Card {...item} />}
      keyExtractor={(item, index) => item.name + index}
      numColumns={2}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderColor:'#00CCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    width: '45%',
    marginHorizontal:10,
    backgroundColor:'#ADD8E6'
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
    color:'#00CCCC'
  },
  classificationText: {
    color: 'grey',
    marginVertical: 4,
    fontSize: 16
  },
  descriptionText: {
    marginVertical: 4,
    fontSize: 12
  },
});

export default DetailPage;
