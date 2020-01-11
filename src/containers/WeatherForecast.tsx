/**
 * @file 天气预报demo
 * 
 * 北京：101010100
 * 深圳：101280601
 * 
 * OpenWeather
 * key: 1229d87385e87ec6b9ba364b15e96eb3
 * 深圳：1795565
 * 上海：1796236
 * 北京：1816670
 * 广州：1809858
 */

import React, { useState, useEffect } from 'react'
import './WeatherForecast.scss'
import { getWeatherData, weatherParams } from '../api/weather'

let res: object = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1578409200,
      "main": {
        "temp": 284.92,
        "feels_like": 281.38,
        "temp_min": 283.58,
        "temp_max": 284.92,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 90,
        "temp_kf": 1.34
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.19,
        "deg": 211
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2020-01-07 15:00:00"
    },
  ],
  "city": {
    "id": 2643743,
    "name": "London",
    "coord": {
      "lat": 51.5073,
      "lon": -0.1277
    },
    "country": "GB",
    "timezone": 0,
    "sunrise": 1578384285,
    "sunset": 1578413272
  }
}

function WeatherCard() {
  enum cityID {
    shenzhen = 1795565,
    shanghai = 1796236,
    beijing = 1816670,
    guangzhou = 1809858
  }
  const APPID = '1229d87385e87ec6b9ba364b15e96eb3'

  let [id, setID] = useState(cityID.shenzhen)
  let [data, setData] = useState<object | null>(null)
  useEffect(() => {
    getData({ id, APPID })
  }, [id])

  async function getData(params: weatherParams) {
    const res = await getWeatherData(params)
    console.log(res)
    const { data } = res;
    if (data.cod !== '200') {
      return
    }
    setData(data)
  }

  return (
    <section className="weather-card">
      weather
    </section>
  )
}

export default WeatherCard;
