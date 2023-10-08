import React, { useState } from 'react'
import { Image, Text, View,StyleSheet, ScrollView } from 'react-native'
import { Avatar,Button } from '@rneui/themed';


import Icon from 'react-native-vector-icons/Feather';
import Instaavatar from '../component/instaavatar';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
const imagePaths = {
  "11": require('../image/11.jpg'),
  "photo4": require('../image/photo4.jpg'),
  // Add more image mappings as needed
};



export default function Rells() {

  
  const [count, setCount] = useState("11");
  // Event handler for the button press
  const handleButtonPress = () => {
    // Update the state when the button is pressed
    setCount("photo4");
  };
  
  
  return (
    <View style={styles.contuner}>
      
      <Image source={imagePaths[count]} style={styles.image} />
                   <View style={styles.contuner1}>
       <Text style={styles.textimage}>Reels</Text>
       <Icon name="camera" type="feather" size={25} color="white" />

       </View>
       <View style={styles.contuner2}>
       <View style={styles.contuner21}>
       <View style={styles.contuner211}>
       <Avatar
          size={30}
          rounded
          source={require(`../image/11.jpg`)} 
              key={2}
        />
        <Text style={styles.textv0}>Instagram { count}</Text>
        <Button size='sm'
        onPress={handleButtonPress} 
              title="Suivre"
              buttonStyle={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 10,
              }}
              containerStyle={{
                width: 80,
                height:31,
                marginHorizontal: 10,
                
                marginVertical:"1%"
                
              }}
              titleStyle={{fontSize:14 }}
            />
</View>
        <Text style={{color:"white"}}>
        FlowParserMixin.parseExprAtom 
        </Text>

        
       </View>
       <View style={styles.contuner22}>
        <View style={styles.icontext}>
       <Icon2 name="hearto" size={25} color="white" />
       <Text style={{color:"white"}}>
        100K
        </Text>
        </View>
        <View style={styles.icontext}>
          <Icon3 name="comment" size={25} color="white" />
          <Text style={{color:"white"}}>
        100K
        </Text>
        </View>
        <View style={styles.icontext}>
          <Icon4 name="paper-plane-outline" size={25} color="white" />
          <Text style={{color:"white"}}>
        100K
        </Text>
        </View>

          <Icon1 name="dots-three-vertical" style={styles.icontext} size={20}  color="white" />
          <Avatar
          size={30}
          
          source={require('../image/photo4.jpg')}
              key={2}
              containerStyle={{
                borderWidth:1,
                borderColor:"white",
                borderRadius:3,
                marginHorizontal: 10,
                
                marginVertical:10
                
              }}
        />




        
       </View>
       

       </View>
      

       
        
    </View>
  )
}
const styles = StyleSheet.create({
  image:{
    width:400,
    height:1000,
    position:"absolute",
    top:0,
    left:0

  },
  textimage:{
    color:"white",
    fontSize:22,
    fontWeight:"700",
    
    


  },
    
  contuner1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // This pushes the text and icon to opposite ends
    paddingHorizontal: 20,
    paddingVertical:30,
    
    



  },
  contuner211:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between', // This pushes the text and icon to opposite ends
    



  },
  contuner2:{
    flexDirection:"row",
    flex: 1,
    justifyContent: 'space-between', // Aligns content at the bottom
    alignItems: 'center',
    padding: 20,
  
    



  },
  contuner21:{
    
    paddingHorizontal:'0%',
    paddingTop:'50%'



  },
  contuner22:{
    
    flexDirection: 'column', // Vertical direction is the default
    alignItems: 'center',
    justifyContent: 'space-between', // This pushes the text and icon to opposite ends
    paddingLeft: "23%",
    paddingVertical:30



  },
  textv0:{
    fontWeight:"800",
    color:"white",
    marginHorizontal:"3%",
    marginVertical:"1%"
    

  },
  icontext:{
    marginVertical:10
  },
  contuner:{
    height:"140%"
    

  }
  
});