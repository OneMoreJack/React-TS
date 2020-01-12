import { get } from './index'

export interface weatherParams {
  id: number,
  APPID: string,
  lang?: string,
  cnt?: number
}
/**
 * @interface 每日天气数据接口
 */
export interface dailyData {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
  },
  weather: [{
    description: string,
    icon: string
  }],
  wind: {
    speed: number,
    deg: number
  }
}
/**
 * @interface 天气数据里的城市数据类型接口
 */
interface cityData {
  id: number,
  name: string,
  sunrise: number,
  sunset: number
}

/**
 * @interface 请求天气api 返回的数据类型
 */
export interface weatherData {
  cod: string,
  list: dailyData[],
  city: cityData
}
export const getWeatherData = (params: weatherParams) => get<weatherData>(`http://api.openweathermap.org/data/2.5/forecast`, params)
// export const getWeatherData = (params: weatherParams) => get<weatherData>(`http://api.openweathermap.org/data/2.5/forecast`, params)
