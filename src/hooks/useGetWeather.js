import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'
import { API_KEY } from '@env';

export const useGetWeather = () => {
    
    const [loading, setLoading] = useState(true)
    const [locationErrorMsg, setLocationErrorMsg] = useState(null)
    const [weather, setWeather] = useState([])
    const [latitude, setLatitude] = useState([])
    const [longitude, setLongitude] = useState([])
    
    //Getting weather data
    const getWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            const weatherData = await response.json()
            setWeather(weatherData)
        } catch (error) {
            setLocationErrorMsg('An error has occurred. There is no response for weather data :(')
        } finally { //Lol this is new for me xD
            setLoading(false)
        }
    }

    //Getting da current location of the mobile device
    //Docs: https://docs.expo.dev/versions/latest/sdk/location/
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            
            if (status !== 'granted') {
                setLocationErrorMsg('Permission to access location was denied')
                return
            }

            let location = await Location.getCurrentPositionAsync({})

            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);

            await getWeatherData()

        }) ()
    }, [latitude, longitude])

    return [ loading, locationErrorMsg, weather ]

}

