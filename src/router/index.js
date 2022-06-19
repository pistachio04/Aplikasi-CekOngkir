import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, DetailOngkir} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailOngkir"
        component={DetailOngkir}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
