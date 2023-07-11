import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({text, featherName, featherColor, featherSize}) => {
  return (
    <View style={styles.populationWrapper}>
        <Feather name={featherName} size={featherSize} color={featherColor}/>
        <Text style={styles.populationText}>{text}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
    populationWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white',
        fontWeight: 'bold'
      },
})
