/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/login/login';
import { StatusBar } from 'react-native';
import Welcome from '../pages/welcome/welcome';
import LoginOrAcccount from '../pages/loginOrAccount/loginOrAccount';
import AccountCreation from '../pages/accountCreation/accountCreation';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5EC57E" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='LoginOrAccount' component={LoginOrAcccount} options={{ headerShown: false }} />
        <Stack.Screen name='AccountCreation' component={AccountCreation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}