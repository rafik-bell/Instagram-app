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
import Search from './search';


const Tab = createMaterialTopTabNavigator();

const imageListData = [
  { id: '1', source: require('../image/photo4.jpg') },
  { id: '2', source: require('../image/photo4.jpg') },
  { id: '3', source: require('../image/photo4.jpg') },
 { id: '4', source: require('../image/photo4.jpg') },
  { id: '5', source: require('../image/photo4.jpg') },
  { id: '6', source: require('../image/photo4.jpg') },
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

export default function Profil( {navigation} ) {
  return (
    <View style={{ flex: 1 }}>
      
        <HeaderRNE
        containerStyle={styles.headerContainer}
        leftComponent={
          <View style={styles.leftHeader}>
            <Icon2 name="lock-closed-outline" size={19} color="black" />
            <Text style={styles.textv0}>rafik_bell</Text>
            <Icon name="chevron-down" type="feather" color="black" />
          </View>
        }
        rightComponent={
          <View style={styles.rightHeader}>
            <Icon1 name="plussquareo" size={30} color="black" />
            <Icon name="menu"  style={styles.menuicon} type="feather" size={30} color="black" />
          </View>
        }
       
      />
      
    <View style={styles.view1}  >
    <Avatar
          size={80}
          rounded
          source={require('../image/photo4.jpg')}
              key={2}
        />
        <View style={styles.secendpartvew}><Text style={{fontWeight:800,textAlign:"center"}}>50</Text>
        <Text > Publications</Text></View>
        <View style={styles.secendpartvew}><Text style={{fontWeight:800,textAlign:"center"}}>50</Text>
        <Text> Followers</Text></View>
        <View style={styles.secendpartvew}><Text style={{fontWeight:800,textAlign:"center"}}>50</Text>
        <Text> Suivi(e)s</Text></View>
        
    </View>
    <Text style={{fontWeight:600,paddingLeft:"4%",backgroundColor: 'white'}}>Rafik</Text>


    <View style={styles.view2}>
    <Button
              title="Modifier profil"
              buttonStyle={styles.button} // Apply custom button style
              titleStyle={styles.buttonText} 
             
            />
            <Button
              title="Partager profil"
              buttonStyle={styles.button} // Apply custom button style
              titleStyle={styles.buttonText}
            />



    </View>
    
    <Tab.Navigator  screenOptions={{
    
  }}
        >
        <Tab.Screen name="Tab1" component={Screen1}  options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="images-outline" color={color} size={20} /> // Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -20, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }}   />
        <Tab.Screen name="Tab2" component={Screen2}  options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="person-outline" color={color} size={20} /> // Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -20, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }} />
      </Tab.Navigator>
      
    
    
    </View>
    
  )
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
    backgroundColor: 'white',

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
    paddingVertical:"8%",
    paddingLeft:"8%",
    backgroundColor: 'white',

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