import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreeen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={ {
        headerShown: false,
        cardStyle:{
            backgroundColor: 'white'
        }
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}