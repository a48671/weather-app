import axios from 'axios';
import { API_ENDPOINT, API_KEY } from '../const';

type TCoords = {
  lat: number;
  lon: number;
};

type TResponse = {
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  };
  name: string;
  sys: {
    country: string;
    id: number
    sunrise: number
    sunset: number
    type: number
  };
  timezone: number
  visibility: number
  weather: Array<{
    description: string;
    icon: string;
    id: number
    main: string;
  }>;
  wind: {
    deg: number
      gust: number
      speed: number
  };
};

export function getWeatherFetch({ lat, lon }: TCoords): Promise<TResponse> {
  return axios.get(`${API_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(res => res.data);
}
