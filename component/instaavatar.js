import React from 'react'
import {  Image, StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, Avatar, Badge } from '@rneui/themed';
import { LinearGradient } from "expo-linear-gradient";
import Home from '../pages/home';
 const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
export default function Instaavatar({navigation}) {
  return (
    <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("tab3")} >
    <AnimatedLinearGradient style={styles.viewavatar}  colors={["yellow","orange", "red","rgba(142, 0, 147, 0.98)"]} start={{ x: 0, y: 1 }} // Vertical gradient: start at the top (y: 0) and end at the bottom (y: 1)
      end={{ x: 0.9, y: 0.5 }}>
        <Avatar
          size={80}
          rounded
          onPress={() => navigation.navigate('Story')}
          source={require('../image/photo4.jpg')}
              key={2}
               containerStyle={{
                borderWidth: 3, 
                borderColor: 'white',
                
                
                
        
      }}
             
        />
        
        </AnimatedLinearGradient>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    
    viewavatar:{
      
          borderRadius: 50,
          padding:3,
          
  
    },
    
    
});