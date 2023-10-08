// Import necessary modules and components


import Icon1 from 'react-native-vector-icons/AntDesign'; 
import Icon2 from 'react-native-vector-icons/Ionicons'; 
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/AntDesign'; 
import Icon5 from 'react-native-vector-icons/Octicons';

// Import your screen components
import Home from '../pages/home';
import Test from '../pages/test';

import Add from '../pages/add';
import Search from '../pages/search';
import Rells from '../pages/rells';
import Profil from '../pages/profil';


import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from '../pages/Home/Notification';
import Story from '../pages/Home/story';

// ... Import your screen components here ...

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Separate your TabNavigator into its own component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'blue',
        labelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
          name="Home"
          component={Home}
          options={{
            
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon3 name="home" size={26} color="black" />// Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -0, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }}
        />
        <Tab.Screen
          name="tab"
          component={Search}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon4 name="search1" type="feather" size={26} color="black" /> // Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -0, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }}
        />
        <Tab.Screen
          name="tab1"
          component={Add}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon1 name="plussquareo" size={26} color="black" ></Icon1> // Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -0, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }}
        />
        <Tab.Screen
          name="tab2"
          component={Rells}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="video"  type="feather" size={25} color="black" /> // Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -0, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }}
        />
        <Tab.Screen
        
          name="tab3"
          component={Profil}
          options={{
            headerShown: false,
            
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="person-outline" color={color} size={26} /> // Example icon
            ),
            tabBarIconStyle: {
              marginBottom: -0, // Adjust the icon's vertical position
            },
            tabBarLabelStyle: {
              fontSize: 0, // Customize the font size of the tab label
            },
          }}
        />
    </Tab.Navigator>
  );
};

const Butoom = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="tab3" component={Profil} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Butoom;
