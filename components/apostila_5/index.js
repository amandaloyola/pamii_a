import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Index() {
    return(
        <View style={styles.container}>
    <Text style={styles.paragraph}>Apostila 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ff80ab',
        padding: 8,
    },
    paragraph:{
        margin: 6,
        fontSize; 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#c51162'
    },
});

<View styles={styles.container}>
    <Text styles={styles.paragraph}> Exemplo 5 </Text>

    <Text styles={styles.txtSaida}> Calculadora Básica </Text>

    <Text styles={styles.textLabel}> 1 </Text>