import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

console.tron.log('Hello Reactotron');

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome React</Text>
            <Text style={styles.welcome}>teste 123</Text>
        </View>
    );
}
