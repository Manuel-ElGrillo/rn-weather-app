import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from './IconText'
import moment from 'moment/moment'

const City = ({ weatherData }) => {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={styles.bg}
        overlayColor="rgba(0, 0, 0, 0.5)"
        opacity={1}>

        <View style={styles.wrapper}>

        <Text style={[styles.cityFS, styles.cityText]}>{weatherData.name}</Text>
        <Text style={[styles.countryFS, styles.cityText]}>{weatherData.country}</Text>

        <View>
          <IconText 
            text={weatherData.population}
            featherName={"user"}
            featherColor={"white"}
            featherSize={50}/>
        </View>

        <View style={styles.sunLightWrapper}>
          <IconText 
            featherName={'sunrise'}
            featherSize={50}
            featherColor={'white'}
            text={moment(weatherData.sunrise).format('h:mm a')}/>

          <IconText 
            featherName={'sunset'}
            featherSize={50}
            featherColor={'white'}
            text={moment(weatherData.sunset).format('h:mm a')}/>
        </View>

        </View>

        

      </ImageBackground>

    </SafeAreaView>
  )
}

export default City

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 0,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'royalblue',
    margin: 60,
    paddingVertical: 50,
    borderRadius: 10,
    borderWidth: 5
  },
  bg: {
    flex: 1,
  },
  cityFS: {
    fontSize: 40,
  },
  countryFS: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  sunLightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  sunLightText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
})
