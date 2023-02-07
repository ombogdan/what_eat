import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'shared/navigation/rootNavigation';
import Welcome from 'screens/Auth/Welcome/';
import Home from 'screens/Main/Home';
import {createStackNavigator} from "@react-navigation/stack";
import Login from 'screens/Auth/Login';
import Registration from 'screens/Auth/Registration';
import { MainNavigation } from 'screens/Main';

// @ts-ignore
const Stack = createStackNavigator()
export const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={MainNavigation}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Registration'
        component={Registration}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
