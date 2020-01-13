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
 * 
 * icon: `http://openweathermap.org/img/wn/${icon}@2x.png`
 */

import React, { useState, useEffect } from 'react'
import './WeatherForecast.scss'
import { getWeatherData, weatherParams, weatherData, dailyData, cityData } from '../api/weather'
import { tempTransfer } from '../utils'

enum dayEnum {
  周日,
  周一,
  周二,
  周三,
  周四,
  周五,
  周六
}

/**
 * hooks 格式化时间 周一 13
 */
function useDayTime(dt: number): string {
  let [dayTime, setDayTime] = useState(new Date(dt))
  let [day, setDay] = useState<string>(dayEnum[dayTime.getDay()])
  let [date, setDate] = useState<number>(dayTime.getDate())

  useEffect(() => {
    setDayTime(new Date(dt))
  }, [dt])

  useEffect(() => {
    setDay(dayEnum[dayTime.getDay()])
    setDate(dayTime.getDate())
  },[dayTime])

  return `${day} ${date}`
}

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

interface dailyProps {
  data: dailyData,
  active: boolean,
  handleChoose: (data: dailyData) => void
}
function DailyTable(props: dailyProps) {
  const { data, active, handleChoose } = props
  return (
    <div 
      className={`daily-table ${ active ? 'active' : null }`}
      onClick={() => handleChoose(data)}>
      <div className="vpc">
        <div>{ useDayTime(props.data.dt * 1000) }</div>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon"/>
        <div>{ tempTransfer(data.main.temp_max) }°</div>
        <div>{ tempTransfer(data.main.temp_min) - 8 }°</div>
      </div>
    </div>
  )
}

interface detailProps {
  data: dailyData,
  city: cityData
}
function DetailBoard(props: detailProps) {
  const { data, city } = props;

  return (
    <div className="detail-board">
      <header>
        <h3>{ city.name }</h3>
      </header>
      <div className="conditions">
        <div className="icon-wrap">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon"/>
        </div>
        <div className="current_temp">{ tempTransfer(data.main.temp) }</div>
        <div className="temp_unit">
          <div>°C</div>
          <div>F</div>
        </div>
        <div className="temp_range">
        <div>{ tempTransfer(data.main.temp_max) }°</div>
        <div>{ tempTransfer(data.main.temp_min) - 8 }°</div>
        </div>
        <div className="more">
          <div>气压：{ data.main.pressure } hPa</div>
          <div>风速：{ data.wind.speed } m/s</div>
          <div>湿度：{ data.main.humidity } %</div>
        </div>
      </div>
      <div className="desc-day">
        <div>{ data.weather[0].description }</div>
        <div className="dayTime">{ useDayTime(props.data.dt * 1000) }</div>
      </div>
    </div>
  )
}

function WeatherCard() {
  enum language {
    english = 'en',
    chinese = 'zh_cn'
  }
  enum cityID {
    shenzhen = 1795565,
    shanghai = 1796236,
    beijing = 1816670,
    guangzhou = 1809858
  }
  const APPID = '1229d87385e87ec6b9ba364b15e96eb3'

  let [id, setID] = useState(cityID.shenzhen)
  let [lang, setLang] = useState(language.chinese)
  let [data, setData] = useState<weatherData | null>(null)
  useEffect(() => {
    async function getData(params: weatherParams) {
      const res = await getWeatherData(params)
      const { data } = res
      dataHandler(data)
    }
    function dataHandler(data: weatherData) {
      if (data.cod !== '200') {
        return
      }
      let { list } = data;
      list = list.filter((v, index) => index % 8 === 0)
  
      setData(Object.assign({}, data, { list }))
      setDayData(list[0])
    }

    getData({ id, APPID, lang })
  }, [id, lang])

  // 选中的时间段的天气数据
  let [dayData, setDayData] = useState<dailyData | null>(null)
  const handleChoose: (data: dailyData) => void = (data) => {
    setDayData(data)
  }

  return (
    <section className="weather-card">
      {dayData && data &&
        <DetailBoard
          data={dayData}
          city={data.city} />
      }
      {data?.list && 
        data.list.map(day => (
          <DailyTable
            key={day.dt}
            active={day.dt === dayData?.dt}
            data={day}
            handleChoose={handleChoose} />
        ))}
    </section>
  )
}

export default WeatherCard;
