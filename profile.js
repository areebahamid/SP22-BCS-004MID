import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './homescreen';
import { UpdatesScreen } from './updatesscreen';
const Tab = createBottomTabNavigator();

const Profile = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? require('./assets/favicon.png') : require('./assets/favicon.png');
          } else if (route.name === 'Updates') {
            iconName = focused ? require('./assets/favicon.png') : require('./assets/favicon.png');
          } else if (route.name === 'Settings') {
            iconName = focused ? require('./assets/favicon.png') : require('./assets/favicon.png');
          } else if (route.name === 'Search') {
            iconName = focused ? require('./assets/favicon.png') : require('./assets/favicon.png');
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Updates" component={UpdatesScreen} />
    </Tab.Navigator>
  );
};



const SearchScreen = () => (
  <View style={styles.tabScreen}>
    <Text>Search Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.tabScreen}>
    <Text>Settings Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Profile };
