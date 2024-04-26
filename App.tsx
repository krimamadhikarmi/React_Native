import React from 'react';
import Component from './screen/ComponentScreen';
import List from './screen/ListScreen';
import Home from './screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageScreen from './screen/ImageScreen';
import CounterScreen from './screen/CounterScreen';
import ColorScreen from './screen/ColorScreen';
import { SquareScreen } from './screen/SquareScreen';
import { TextScreen } from './screen/TextScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Component" component={Component} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
