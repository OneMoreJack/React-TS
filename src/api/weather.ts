import { get } from './index'

export interface weatherParams {
  id: number,
  APPID: string,
}
export const getWeatherData = (params: weatherParams) => get(`http://api.openweathermap.org/data/2.5/forecast`, params)
