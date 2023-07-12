import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment/moment';

const WeatherItem = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition].icon} size={50} color={'white'} />
      <View style={styles.textWrapper}>
        <View>
          <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={styles.date}>{moment(dt_txt).format('h:mm a')}</Text>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <Text style={styles.temp}>{`High ${Math.round(min)}`}°C</Text>
          <Text style={styles.temp}>{`Low ${Math.round(max)}`}°C</Text>
        </View>
      </View>
    </View>
  )
}

export default WeatherItem

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'royalblue',
    borderRadius: 10
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
