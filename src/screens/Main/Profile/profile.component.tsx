import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from './profile.styles';

export const Home = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Profile</Text>
      <Text style={styles.infoText}>Here you can find information, resources, and tools to help you achieve your
        goals.</Text>
    </View>
  );
};
