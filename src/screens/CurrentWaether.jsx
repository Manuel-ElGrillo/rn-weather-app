import React from 'react'
import { View, StyleSheet, Text, ImageBackground, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import ExtraInfo from '../components/ExtraInfo';
import { weatherType } from '../utilities/weatherType';

const CurrentWaether = ({ weatherData }) => {

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

  const weatherCondition = weather[0]?.main

  return (

    <SafeAreaView style={styles.wrapper}>

      <ImageBackground
        source={require('../../assets/weather.jpg')}
        style={styles.img}>

        <View style={styles.container}>
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

      </ImageBackground>

    </SafeAreaView>

  )
}

export default CurrentWaether

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 0,
  },
  img: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
    margin: 50,
    borderWidth: 5,
    borderRadius: 10,
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
    color: 'white',
    marginTop: 30
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
