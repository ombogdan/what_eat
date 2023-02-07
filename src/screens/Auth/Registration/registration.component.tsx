import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { navigate } from 'shared/navigation/rootNavigation';

export const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Add your form submission logic here
  };

  const handleBackgroundPress = () => {
    Keyboard.dismiss();
  };

  const handleNavigateToHome = () =>{
    navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleBackgroundPress}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCompleteType='email'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder='Password'
          secureTextEntry
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          placeholder='Confirm Password'
          secureTextEntry
          autoCapitalize='none'
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToHome} style={styles.bottomContainer}>
          <Text>go to home</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: Dimensions.get('window').height * 0.8,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  bottomContainer:{
    marginTop: 20
  }
});
