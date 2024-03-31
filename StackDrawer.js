import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react';
import { Profile } from './profile.js';
import { HomeScreen } from './homescreen.js';
import { UpdatesScreen } from './updatesscreen';
import { SearchScreen } from './SearchScreen.js';
import { SettingsScreen } from './SettingsScreen.js';


const Drawer = createDrawerNavigator();



const StackDrawer = () => {
  return (
    <NavigationContainer independent ={true}>
         <Drawer.Navigator >
                <Drawer.Screen name="Profile" component={Profile}/>
                <Drawer.Screen name="Updates" component={UpdatesScreen} />
                <Drawer.Screen name="Search" component={SearchScreen} />
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
    </NavigationContainer>
  )
};

export  {StackDrawer};