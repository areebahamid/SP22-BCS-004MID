import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Signup = ({ navigation }) => {
    
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const saveFirstname = (value) => {
      setFirstName(value);
    };
    const saveLastname = (value) => {
      setLastName(value);
    };
    const saveAge = (value) => {
      setAge(value);
    };
    const saveUsername = (value) => {
      setUsername(value);
    };
    const savePassword = (value) => {
      setPassword(value);
    };
    const saveEmail = (value) => {
      setEmail(value);
    };
    const toProfile = () => {
        navigation.navigate('Profile');
    };
    const handleSignup = async () => {
        try{  await createUserWithEmailAndPassword(auth,email,password)
            .then((userCredss)=>{
                const user=userCredss.user
                console.warn(user)

            })
        
        } catch(error){
            console.error(error);
        }        
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.textstyle}>REGISTER</Text>
            <TextInput
                style={styles.input}
                placeholder='First Name'
                value={firstname}
                onChangeText={saveFirstname}
            />
            <TextInput
                style={styles.input}
                placeholder='Last Name'
                value={lastname}
                onChangeText={saveLastname}
            />
            <TextInput
                style={styles.input}
                placeholder='Age'
                value={age}
                onChangeText={saveAge}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={saveEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Username'
                value={username}
                onChangeText={saveUsername}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={savePassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={[styles.button, { backgroundColor: 'plum' }]} onPress={handleSignup}>
                <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'plum' }]} onPress={toProfile}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderRadius: 50,
        height: 50,
        width: 300,
        backgroundColor: 'lavender',
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    textstyle: {
        fontSize: 40,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'lavender',
        backgroundColor: 'plum',
        width: 300,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export { Signup };
