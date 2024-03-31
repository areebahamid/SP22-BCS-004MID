import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from './firebase';
import {  signInWithEmailAndPassword,  } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const SaveUsername = (value) => {
    setUsername(value)
  }

  const SavePassword = (value) => {
    setPassword(value)
  }

  const toProfile = () => {
    navigation.navigate('Profile');
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth,username,password)
      .then((userCredss)=>{
          const user=userCredss.user
          console.warn(user)
      })
  } catch (error) {
      if (error.code === 'auth/user-not-found') {
          console.log('User does not exist. Please sign up.');
        } else if (error.code === 'auth/wrong-password') {
          console.log('Incorrect email or password.');
        } else {
          console.error(error);
        }
      }
};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='UserName'
          value={username}
          onChangeText={SaveUsername}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={SavePassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={[styles.butt, { backgroundColor: 'plum' }]}
        onPress={toProfile}>
        <Text >LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.butt, { backgroundColor: 'plum' }]}
        onPress={handleLogin}>
        <Text >CHECK</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderRadius: 50,
    height: 50,
    width: 300,
    backgroundColor: 'lavender',
    marginBottom: 10,
    textAlign: 'left',
    paddingLeft: 7,
  },
  butt: {
    width: 150,
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export { Login };
