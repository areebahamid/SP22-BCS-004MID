import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Getapi } from './getapi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const { data, error } = Getapi();

  useEffect(() => {
    const saveDataLocally = async () => {
      try {
        await AsyncStorage.setItem('apiData', JSON.stringify(data));
        console.log('API data saved locally.');
      } catch (error) {
        console.error('Error saving API data locally:', error);
      }
    };

    if (data) {
      saveDataLocally();
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, margin: 60 }}> API Screen </Text>
      <View style={styles.logo}>
        {error ? (
          <Text>Error: {error}</Text>
        ) : data ? (
          <View style={{
            backgroundColor: 'white',
            margin: 70,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{ color: 'black' }}>Type: {data.type}</Text>
            <Text style={{ color: 'black' }}>Setup: {data.setup}</Text>
            <Text style={{ color: 'grey' }}>Punchline: {data.punchline}</Text>
            <Text style={{ color: 'grey' }}>ID: {data.id}</Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <View style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    // styles for logo container
  },
  input: {
    // styles for input container
  },
});

export { HomeScreen };
