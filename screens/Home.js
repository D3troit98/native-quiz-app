import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Sudoku from "../assets/astronaut-in-tea-break.gif"
import { MotiImage, MotiView } from 'moti'
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

//<a href="https://iconscout.com/lotties/astronaut" target="_blank">Astronaut in Tea break Animated Icon</a> by <a href="https://iconscout.com/contributors/israfil-hossain-anik">Israfil Hossain</a> on <a href="https://iconscout.com">IconScout</a>
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <MotiImage
                    from={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        // default settings for all style values
                        type: 'timing',
                        duration: 350,
                        // set a custom transition for scale
                        scale: {
                            type: 'spring',
                            delay: 100,
                        },
                    }}
                    style={styles.banner}
                    source={Sudoku}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
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

    }

})
