import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import ExtraInfo from '../components/ExtraInfo';
import { weatherType } from '../utilities/weatherType';

const CurrentWaether = ({weatherData}) => {

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

  const weatherCondition = weather[0]?.main

  return (

    <View style={[styles.container, { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
      <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
      <Text style={styles.tempTitle}>Current Temperature</Text>
      <Text style={styles.currentTempValue}>{Math.round(temp)}°C</Text>
      <Text style={styles.windChillTitle}>Wind Chill</Text>
      <Text style={styles.windChillValue}>{Math.round(feels_like)}°C</Text>
      <Text style={styles.HLValues}>{`High: ${Math.round(temp_max)}°C | Low: ${Math.round(temp_min)}°C`}</Text>

      <ExtraInfo
        text1={weather[0]?.description}
        text2={weatherType[weatherCondition]?.message} />

    </View>

  )
}

export default CurrentWaether

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempTitle: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center'
  },
  currentTempValue: {
    color: 'white',
    fontSize: 38,
  },
  windChillTitle: {
    fontSize: 38,
    color: 'white'
  },
  windChillValue: {
    fontSize: 36,
    color: 'white',
  },
  HLValues: {
    fontSize: 24,
    color: 'white'
  },
});
