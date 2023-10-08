import React, { useState } from 'react'
import {  Image, StyleSheet, Text, View,Animated, ScrollView,Alert, Modal, Pressable} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, Avatar, Badge } from '@rneui/themed';
import Icon1 from 'react-native-vector-icons/AntDesign'; 
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon5 from 'react-native-vector-icons/Octicons';
import { LinearGradient } from "expo-linear-gradient";
import Instaavatar from '../component/instaavatar';
import Publicationimage from '../component/Publicationimage';
import MOdel from '../component/model';
 const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);


export default function Home( {navigation} ) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <View>
      <ScrollView>
         <HeaderRNE
        containerStyle={styles.headerContainer}
        leftComponent={
          <View style={styles.leftHeader}>
            
            <Text style={styles.textv0}>Instagram</Text>
            <Icon name="chevron-down" type="feather" size={25} color="black" onPress={() => setModalVisible(true)}></Icon> 
          </View>
        }
        rightComponent={
          <View style={styles.rightHeader}>
            <Icon1 name="hearto" size={25} color="black"  onPress={() => navigation.navigate('Notification')} />
            <Icon2 name="facebook-messenger"  style={styles.menuicon} type="feather" size={30} color="black" ></Icon2>
            <Badge
            
        value="3" // Replace with the desired badge value
        status="error" // You can use "primary", "success", "warning", or "error" for different badge colors
        containerStyle={styles.badgeContainer}
      />
          </View>
        }
       
      />
      <View style={styles.view1}  >
        <View>
    <Avatar  onPress={() => navigation.navigate("tab3")}
          size={70}
          rounded
          source={require('../image/photo4.jpg')}
              key={2}
              
        ><Avatar.Accessory size={23}   ></Avatar.Accessory></Avatar>
        <Text>Votre Story</Text>
        </View>
        
        <View style={styles.viewstory}   >
        <Instaavatar navigation={navigation} ></Instaavatar>
        <Text style={{textAlign:"center",fontWeight:600}} >rafik_bell</Text>
        </View>
        
       
        <View style={styles.viewstory}   >
        <Instaavatar ></Instaavatar>
        <Text style={{textAlign:"center",fontWeight:600}} >rafik_bell</Text>
        </View>


        <Avatar
          size={70}
          rounded
          source={require('../image/photo4.jpg')}
              key={2}
              onPress={() => navigation.navigate('tab3')}
        />
        
    </View>
    <View style={styles.view2}  >

<Publicationimage navigation={navigation}></Publicationimage>
<Publicationimage></Publicationimage>



    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.modalText}>Suivi(e)</Text>
            <Icon1 name="staro"  style={{marginLeft:20,marginBottom:10}} type="feather" size={25} color="black" ></Icon1>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.modalText}>Favoris</Text>
            <Icon4 name="account-supervisor-outline"  style={{marginLeft:20,marginBottom:10}} type="feather" size={25} color="black" ></Icon4>
            </View>
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
    </ScrollView>
   
   
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
  
 
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"200%"
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: 'white',
    
  },
  menuicon:{
    marginLeft:"30%"
  },
  textv0:{
    fontWeight:"800",
    fontSize:24,
    marginRight:"3%"
    

  },
  view1:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingTop:"0%",
    height:120
    

  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10, 
    height: 10,
    marginTop:-5
  },
  viewavatar:{
    
        borderRadius: 50,
        padding:3,
        

  },
  viewstory:{
    alignItems:"center",
    fontWeight:800
    
  },
  centeredView: {
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginRight:150
  },
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width:100
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 0,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
});