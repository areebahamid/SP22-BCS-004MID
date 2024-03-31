import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native';

const UpdatesScreen = () => {
    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
        // Data to be stored in AsyncStorage
        let myArray = [{ key: 0, title: "areeba" }, { key: 1, title: "ahmad" }];

        // Storing data in AsyncStorage asynchronously
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('myName', JSON.stringify(myArray));
                console.log("Data stored successfully in AsyncStorage.");
            } catch (error) {
                console.error("Error storing data in AsyncStorage:", error);
            }
        };

        storeData();

        // Retrieving data from AsyncStorage asynchronously
        const retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('myName');
                console.log("Raw data retrieved from AsyncStorage:", data);
                if (data) {
                    const parsedData = JSON.parse(data);
                    console.log("Parsed data retrieved from AsyncStorage:", parsedData);
                    setStoredData(parsedData);
                } else {
                    console.log("No data found in AsyncStorage.");
                }
            } catch (error) {
                console.error("Error retrieving data from AsyncStorage:", error);
            }
        };

        retrieveData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Updates Screen</Text>
            {storedData && (
                <View>
                    <Text style={styles.subtitle}>Stored Data:</Text>
                    {storedData.map(item => (
                        <Text key={item.key} style={styles.dataItem}>{item.title}</Text>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dataItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export  {UpdatesScreen}; // Export the component as default

