import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Recipes from 'screens/Main/Recipes';
import Home from 'screens/Main/Home';
import Profile from 'screens/Main/Profile';

const Tab = createBottomTabNavigator();
export const MainNavigation = () => (
  <Tab.Navigator
    backBehavior='none'
    initialRouteName='Home'
    screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name='Recipes'
      component={Recipes}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name='chart-histogram' color={color} size={30} />
        ),
        tabBarLabel: 'Recipes',
      }} />
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name='home' color={color} size={30} />
        ),
        tabBarLabel: 'Home',
      }} />
    <Tab.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name='user-circle' color={color} size={30} />
        ),
        tabBarLabel: ({ color }) => (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ color, fontSize: 10, width: '100%', textAlign: 'center' }}
                  numberOfLines={1}>Profile</Text>
          </View>
        ),
      }} />
  </Tab.Navigator>
);
