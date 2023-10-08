import { Avatar,Button } from '@rneui/themed';
import React from 'react'
import { Image, Text, View,StyleSheet, ScrollView } from 'react-native'





export default function Icontext2() {
  return (
    <View style={styles.contenr}> 
    <View style={styles.contenr1}>
        <Avatar
            size={40}
            rounded
            source={require("../image/11.jpg")}
            containerStyle={{ 
        
        
         }}
          />
           <Avatar
            size={40}
            rounded
            source={require("../image/photo4.jpg")}
            containerStyle={{
                borderWidth: 2,
            borderColor:"white",
    
        marginTop:-35
        ,marginLeft:7
         }}
          />
          </View>
          <Text  style={styles.text}><Text style={{textAlign:"center",fontWeight:600}} >rafik_bell</Text> a commencé a vous suivre <Text style={{textAlign:"center",fontWeight:600,color:"#9e9e9e"}} >5j</Text> </Text>
          <Button size='sm'
        
              title="Suivre"
              titleStyle={{fontSize:12 ,color:'black' }}
              buttonStyle={{
                backgroundColor: "#e0e0e0",
                borderWidth: 1,
                borderColor: '#e0e0e0',
                borderRadius: 10,
              }}
              containerStyle={{
                width:70
               
                
              }}
              
            />
    </View>
  )
}
const styles = StyleSheet.create({

  contenr:{
    flexDirection:"row"
  },
  text:{
    width:220,
    marginLeft:10
  }
  ,
  contenr1:{


    width:50


  }
  
  
});