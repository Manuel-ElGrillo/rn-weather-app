import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ExtraInfo = ({text1, text2}) => {
    return (
        <View style={styles.extraInfo}>
            <Text style={{color: 'white'}}>{`- ${text1}`}</Text>
            <Text style={{color: 'white'}}>{`- ${text2}`}</Text>
        </View>
    )
}

export default ExtraInfo

const styles = StyleSheet.create({
    extraInfo: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: 30,
        textAlign: 'center'
      }
})
