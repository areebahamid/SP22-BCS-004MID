import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Switch, TextInput, Image } from 'react-native';
import { surahNames, surahDetails } from './qurandata';


const logo = require('./pics/q.jpeg');

export default function App() {
    const [theme, setTheme] = useState('LIGHT');
    const [is_Dark, Set_DARK] = useState(false);
    const [showNames, setShowNames] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const ChangeTheme = () => {
        Set_DARK(!is_Dark);

        if (!is_Dark) {
            setTheme('DARK');
        } else {
            setTheme('LIGHT');
        }
    };

    const toggleList = () => {
        setShowNames(prevState => !prevState);
    };

    const renderSurahNamesItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
        
            <Image source={logo} style={styles.logo} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderSurahDetailsItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.text}>Surah {item.id} - {item.details.numberOfAyahs} Ayahs</Text>
        </TouchableOpacity>
    );

    const filterSurahs = (surahs) => {
        return surahs.filter(surah => surah.name.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    return (
        <View style={[styles.container, { backgroundColor: theme === 'DARK' ? 'grey' : 'white' }]}>
            <View style={styles.topContainer}>
                <Switch
                    trackColor={{ false: 'lightgray', true: 'lightblue' }}
                    thumbColor={is_Dark ? 'black' : 'white'}
                    value={is_Dark}
                    onValueChange={ChangeTheme}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search Surah"
                    onChangeText={(text) => setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>
              <Text style={[fontSize=200]}>        So which of the favors of your Lord would you deny?</Text>
            <View style={styles.imageContainer}>
               
                <Image source={logo} style={styles.centeredImage} />
            </View>
            <View style={styles.toggleContainer}>
                <TouchableOpacity
                    style={[styles.toggleButton, showNames ? styles.activeButton : null]}
                    onPress={toggleList}
                >
                    <Text style={[styles.toggleButtonText, { color: theme === 'DARK' ? 'white' : 'black' }]}>Surah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleButton, !showNames ? styles.activeButton : null]}
                    onPress={toggleList}
                >
                    <Text style={[styles.toggleButtonText, { color: theme === 'DARK' ? 'white' : 'black' }]}>Juzz</Text>
                </TouchableOpacity>
            </View>
            {showNames ? (
                <FlatList
                    data={filterSurahs(surahNames)}
                    renderItem={renderSurahNamesItem}
                    keyExtractor={item => item.id.toString()}
                />
            ) : (
                <FlatList
                    data={surahDetails}
                    renderItem={renderSurahDetailsItem}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    toggleButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: 'purple',
        backgroundColor: 'lavender',
        borderRadius: 10,
        marginRight: 10,
        margin:10
    },
    toggleButtonText: {
        fontSize: 16,
    },
    activeButton: {
        backgroundColor: 'lavender',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'purple',
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    text: {
        color: 'black',
        marginLeft: 10, 
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'purple',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    logo: {
        width: 32, 
        height: 25, 
        borderWidth: 6,
        borderRadius: 5,

    },
    centeredImage: {
        width: 360,
        height: 250,
        borderRadius:20,
        margin: 10
    },
});
