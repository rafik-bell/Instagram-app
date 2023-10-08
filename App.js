import { StatusBar } from 'expo-status-bar';
import {  Image, StyleSheet, Text, View,FlatList } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, Avatar } from '@rneui/themed';
import Icon1 from 'react-native-vector-icons/AntDesign'; 
import Icon2 from 'react-native-vector-icons/Ionicons'; 
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/AntDesign'; 
import Icon5 from 'react-native-vector-icons/Octicons';
import { Button } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './pages/home';
import Add from './pages/add';
import Search from './pages/search';
import Rells from './pages/rells';
import Profil from './pages/profil';
import Butoom from './component/buttomappbar';
const Tab = createMaterialTopTabNavigator();

const imageListData = [
  { id: '1', source: require('./image/photo4.jpg') },
  { id: '2', source: require('./image/photo4.jpg') },
  { id: '3', source: require('./image/photo4.jpg') },
 { id: '4', source: require('./image/photo4.jpg') },
  { id: '5', source: require('./image/photo4.jpg') },
  { id: '6', source: require('./image/photo4.jpg') },
  // Add more images to the list as needed
];

const Screen1 = () => {
  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );
  return (
    <View >
      <FlatList
        data={imageListData}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Set the number of columns in the grid
      />
    </View>
  );
};

const Screen2 = () => {
  return (
    <View >
      <Text>Tab Screen 2</Text>
    </View>
  );
};

export default function App() {
  return ( 
    <View style={styles.container}>
       
    
    
    
<Butoom></Butoom>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    marginTop:"8%",
    marginBottom:"1%"
  },
  text:{
    
    fontWeight:"800" ,
  },
  view1:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',

  },
  textv0:{
    fontWeight:"800",
    fontSize:20,
    marginRight:"10%"
    

  },
  view0:{
    display:"flex"

  },

  secendpartvew:{
    flexDirection:'column',
    textAlign:"center"
  },
  
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"150%"
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: 'white',
    
  },
  headerContainer1: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex:2    

    
  },
  leftHeader1: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"200%",
    justifyContent: 'space-around',
  },
  rightHeader1: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"200%",
    justifyContent: 'space-around',
  },
  menuicon:{
    marginLeft:"30%"
  },
  secendpartvew:{
    display:"flex"
  },
  centerHeader:{
    
  },
  view2:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    marginVertical:"8%",
    marginLeft:"8%"

  },
  button: {
    backgroundColor: '#eeeeee', // Set the button background color
    borderRadius: 10, // Set the button border radius
    paddingHorizontal: 20, // Set horizontal padding
    paddingVertical: 6, // Set vertical padding
    width:"83%",
    
  },
  buttonText: {
    color: 'black', // Set the text color
    fontSize: 13, // Set the text font size
    fontWeight: '500', // Set the text font weight
  },
  view3:{
    

  },
  image:{
    width:130,
    height:125,
    margin:"0.5%"
  }
  
});
