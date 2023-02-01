import { React } from 'react';
import createStackNavigator from 'react-native-screens/createNativeStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'shared/navigation/rootNavigation';
import Welcome from 'screens/Auth/Welcome';
import Home from 'screens/Main/Home';

// @ts-ignore
const Stack = createStackNavigator();
export const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
