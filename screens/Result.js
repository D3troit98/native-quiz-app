import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Sudoku from "../assets/astronaut-skating-on-moon.gif"
import Failure from "../assets/astronot.gif"
const Result = ({ navigation, route }) => {
    const { score } = route.params

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    source={Sudoku}
                />
                <Text style={score < 40 ? styles.failscore : score}>
                    <Text style={{ color: 'black' }}> Score:</Text> {score}
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '600',
        color: '#000000',
        paddingTop: 40,
    },
    banner: {
        width: 300,
        height: 300,

    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        height: '100%',
        backgroundColor: '#CAD2C5'
    },
    button: {
        width: '100%',
        backgroundColor: '#354F52',
        padding: 16,
        borderRadius: 16,
        marginBottom: 30,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        alignItems: 'center'
    },
    score: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '800',
        color: '#ffa500',

    },
    failscore: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '800',
        color: 'blue',

    }

})