import { Alert } from 'react-native';
import { Loading } from './components/loading';
import { Weather } from './components/weather';
import { getWeatherFetch } from './api/weather.transport';
import { getCoords } from './handlers/get-coords';
import React, { useLayoutEffect, useState } from 'react';

export default function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [temp, setTemp] = useState<number>(0);
  const [condition, setCondition] = useState<string>('');

  useLayoutEffect(() => {
    async function getWeather(): Promise<any> {
      setIsLoading(true);
      try {
        const coords = await getCoords();
        if (!coords) return;
        const { main, weather } = await getWeatherFetch(coords);
        setTemp(main.temp);
        if (weather.length) {
          setCondition(weather[0].main);
        }
        setIsLoading(false);
      } catch (error) {
        Alert.alert('Sorry, I can`t get weather');
      }
    }
    getWeather();
  }, []);

  return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
}


