import { get } from './index'

export interface weatherParams {
  id: number,
  APPID: string,
  lang?: string,
  cnt?: number
}
interface weatherData {
  cod: string,
  list: [],
  city: object
}
export const getWeatherData = (params: weatherParams) => get<weatherData>(`http://api.openweathermap.org/data/2.5/forecast`, params)
