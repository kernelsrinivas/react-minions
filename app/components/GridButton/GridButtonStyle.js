import { StyleSheet, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        width: width / 2,
        height: height / 3.15,
    },
    squreContainer: {
        flex:1,
        margin:1,
        backgroundColor:'#40E0D01F',
        borderColor:'#00CED1',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color:'#FFF'
    }
});