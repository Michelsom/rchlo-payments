import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../screens/home';
import {SendTransaction} from '../screens/sendTransaction';
const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false, animation: 'default'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SendTransaction" component={SendTransaction} />
    </Stack.Navigator>
  );
};
