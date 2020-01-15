import { get } from './index'
import { weatherParams, weatherData  } from '../interfaces/weather'

export const getWeatherData = (params: weatherParams) => get<weatherData>(`http://api.openweathermap.org/data/2.5/forecast`, params)
