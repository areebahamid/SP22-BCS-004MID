import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { StackDrawer } from './StackDrawer.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App  () {
 
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'plum', 
            },
            headerTintColor: 'purple', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
            <Stack.Screen name='Home' component={Home}  />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='StackDrawer' component={StackDrawer} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

export {App};
