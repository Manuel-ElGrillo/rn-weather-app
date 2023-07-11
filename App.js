import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import Error from './src/components/Error';
 

export default function App() {

  const [loading, locationErrorMsg, weather] = useGetWeather()
  // console.log(loading, locationErrorMsg, weather)

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {
        locationErrorMsg ? (
          <Error />
        ) : (
          <ActivityIndicator
            size={'large'}
            color={'blue'} />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})