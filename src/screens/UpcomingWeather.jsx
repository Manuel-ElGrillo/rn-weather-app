import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, StatusBar, ImageBackground } from 'react-native'
import WeatherItem from '../components/WeatherItem';

// const DATA = [
//   {
//     dt_txt: "2023-04-07 12:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Clear'
//       }
//     ]
//   },
//   {
//     dt_txt: "2023-04-07 15:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Clear'
//       }
//     ]
//   },
//   {
//     dt_txt: "2023-04-07 18:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Clouds'
//       }
//     ]
//   },
// ]

const UpcomingWeather = ({weatherData}) => {
  return (
    <>

      <SafeAreaView style={styles.container}>

        <ImageBackground
          source={require('../../assets/clouds-1.jpg')}
          style={styles.img}>

          <Text style={styles.title}>Upcoming Weather</Text>

          <FlatList
            data={weatherData}
            keyExtractor={(item) => item.dt_txt}
            renderItem={({ item }) => (
              <WeatherItem
                condition={item.weather[0]?.main}
                dt_txt={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
              />
            )} />

        </ImageBackground>

      </SafeAreaView>
      
    </>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginTop: StatusBar.currentHeight || 0,
      marginTop: 0,
    },
    title: {
      color: 'white',
      textAlign: 'center',
      fontSize: 25,
      marginBottom: 8,
      marginTop: 8,
    },
    img: {
      flex: 1,
    }
})
