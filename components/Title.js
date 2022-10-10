import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Anime Quiz</Text>
            <Text style={styles.little}>Are you a man of culture?</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '600',
        color: '#000000'
    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    little: {
        fontSize: 10,
        fontWeight: '300',
        fontStyle: 'italic'
    }
})