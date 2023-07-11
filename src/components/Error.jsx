import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'
import { Feather } from '@expo/vector-icons'

const Error = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.errorMessage}>{'Something went wrong :('}</Text>
        <Feather name='frown' size={100} color={"#FFF"}/>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
})
