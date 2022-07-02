/* importar react  */
import React from 'react';
/* importamos los componentes de react */
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
/* importamos navigator stack */
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* importamos booton tabs */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* importamos HomeScreen */
import HomeScreen from './src/navigator/ScreensStack/HomeScreen';
/* importamos DetailsScreen */
import DetailsScreen from './src/navigator/ScreensStack/HomeScreen';

// Iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
 */

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
 
  return (
    /* {
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer> }*/
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home"  />
        ),
      }}
      />

      <Tab.Screen 
      name="Settings" component={DetailsScreen} />
    
    </Tab.Navigator>
    </NavigationContainer>
  );
};


