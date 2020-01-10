import { get } from './index'

export const getWeatherData = (params: object) => get(`api.openweathermap.org/data/2.5/forecast`, params)
