import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../screens/home';
import {Installments} from '../screens/installments';
import {SendTransaction} from '../screens/sendTransaction';
const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Installments" component={Installments} />
      <Stack.Screen name="SendTransaction" component={SendTransaction} />
    </Stack.Navigator>
  );
};
