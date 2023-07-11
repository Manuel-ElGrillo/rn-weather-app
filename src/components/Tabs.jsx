import React from 'react'
import CurrentWaether from './../screens/CurrentWaether';
import UpcomingWeather from './../screens/UpcomingWeather';
import City from './../components/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
  return (

    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle: {
        backgroundColor: 'lightblue',
      },
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
      }
    }}>

        <Tab.Screen
          name={'Current Weather'}
          options={ {tabBarIcon: ({ focused }) => (
            <Feather 
              name={'droplet'} 
              size={25} 
              color={ focused ? 'blue' : 'grey' }/>) 
          } }>
            { () => <CurrentWaether weatherData={weather.list[0]}/> }
        </Tab.Screen>

        <Tab.Screen
          name={'Upcoming Weather'}
          options={ {tabBarIcon: ({ focused }) => (
            <Feather 
              name={'clock'} 
              size={25} 
              color={ focused ? 'blue' : 'grey' }/>) 
          } }>
            { () => <UpcomingWeather weatherData={weather.list}/> }
        </Tab.Screen>

        <Tab.Screen
          name={'City'} 
          options={ {tabBarIcon: ({ focused }) => (
            <Feather 
              name={'home'} 
              size={25} 
              color={ focused ? 'blue' : 'grey' }/>) 
          } }>
            { () => <City weatherData={weather.city}/> }
        </Tab.Screen>

    </Tab.Navigator>
  )
}

export default Tabs
