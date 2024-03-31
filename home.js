import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInAnonymously } from 'firebase/auth'; 
import { auth } from './firebase';

const Home = () => {
    const navigation = useNavigation();

    const logining = () => {
        navigation.navigate('Login');
    }

    const signing = () => {
        navigation.navigate('Signup');
    }

    const handleguest = async() => {
        try {
          
            const userCredential = await signInAnonymously(auth);
            const user = userCredential.user;
            console.log('Anonymous user signed in:', user.uid);
            navigation.navigate("StackDrawer");
        } catch (error) {
            console.error('Error signing in anonymously:', error.message);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'grey' }]} 
                onPress={logining}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.textstyle1}>Have not registered yet?</Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'plum' }]} 
                onPress={signing}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'plum' }]} 
                onPress={handleguest}>
                <Text style={styles.buttonText}>Guest User</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
        color: 'plum',
        backgroundColor: 'lavender',
        width: 370,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    textstyle1: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 8,
        color: 'purple',
        textAlign: 'center',
        width: 350,
    },
    image1: {
        marginBottom: 10,
        width: 350,
        height: 380,
    }
});

export { Home };
