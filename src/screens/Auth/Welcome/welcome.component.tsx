import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { navigate, } from 'shared/navigation/rootNavigation';

export const Welcome = () => {
  const handleNavigateToLogIn = () =>{
    navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to my app!</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleNavigateToLogIn}>
          <Text style={styles.buttonText}>Go To Log In</Text>
        </TouchableOpacity>
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer:{
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'dodgerblue',
    height: 55,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

