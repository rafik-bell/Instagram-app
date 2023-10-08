import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import { Header as HeaderRNE, HeaderProps, Icon, Avatar, Badge } from '@rneui/themed';
import Instaavatar from './instaavatar';

export default function Publicationimage({navigation}) {
  return (
    <View style={styles.contuner} >
        <HeaderRNE
        containerStyle={styles.headerContainer}
        leftComponent={
          <View style={styles.leftHeader} >
            <Avatar
            onPress={() => navigation.navigate("tab3")}
             
          size={70}
          rounded
          source={require('../image/photo4.jpg')}
              key={2}
              containerStyle={{
                height:30
                ,width:30 
      }}
        />
            
            <Text style={styles.textv0}>rafik_bell</Text>
            
          </View>
        }
        rightComponent={
          <View style={styles.rightHeader}>
            <Icon1 name="dots-three-vertical" size={20}  color="black" />
            
          </View>
        }
       
      />
      <View style={styles.veiwimag}>
      <Image source={require('../image/11.jpg')}
            style={styles.image}
        />
        </View>

        <HeaderRNE
        containerStyle={styles.headerContainer1}
        leftComponent={
          <View style={styles.leftHeader1}>
          <Icon2 name="hearto" size={25} color="black" />
          <Icon3 name="comment" size={25} color="black" />
          <Icon4 name="paper-plane-outline" size={25} color="black" />
            
            
          </View>
        }
        rightComponent={
          <View style={styles.rightHeader}>
            <Icon5 name="bookmark-o" size={25}  color="black" />
           
            
          </View>
        }
       
      />
<View  style={styles.view1}>
    <Text style={{fontSize:15,fontWeight:600}}>1000 Jaime</Text>
    <Text style={{fontSize:15,fontWeight:600}}>Instagramm <Text style={{fontSize:12,fontWeight:400}}> Drop-in replacement for the standard React Native Image component that displays images </Text> </Text>



    </View>

    <View  style={styles.view2}>
    <Text  style={{fontSize:15,color:"#757575"}}>Voir les 100 commenttairs</Text>
    <Text  style={{fontSize:15,color:"#757575"}}>il y a 1h </Text>


    </View>

        
        
    </View>
  )
}

const styles = StyleSheet.create({
  
    headerContainer:{
        backgroundColor:"white",
        justifyContent: 'space-around',
        
    },
    headerContainer1:{
        backgroundColor:"white",
        justifyContent: 'space-around',
        
    },
    
    leftHeader:{
        flexDirection:"row",
        width:"250%"

    },
    leftHeader1:{
        flexDirection:"row",
        width:"180%",
        justifyContent: 'space-around',

    },
    textv0:{
        marginTop:"2%",
        marginLeft:"5%"
    },
    image: {
    // Set the height of the image
    width: "100%", 
    height: 300,
        resizeMode: 'contain', // Adjust the resizeMode as needed
      },
      veiwimag: {
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%", // Set the width of the image
        height: "auto"},

        view1: {
            backgroundColor:"white",
            paddingHorizontal:"3%",
        },
        view2: {
             backgroundColor:"white",
            paddingHorizontal:"3%",
            paddingBottom:10
            
        },
    
   
    
});
