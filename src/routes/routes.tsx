import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/login/login';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ab212e" barStyle="light-content"/>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}