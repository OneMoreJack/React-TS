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

interface dailyProps {
  data: dailyData,
  active: boolean,
  metric: string,
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
        <div>{ tempTransfer(data.main.temp_max, props.metric) }°</div>
        <div>{ tempTransfer(data.main.temp_min, props.metric) - 8 }°</div>
      </div>
    </div>
  )
}

interface detailProps {
  data: dailyData,
  city: cityData,
  metric: string,
  handleMetric: (metric: string) => void
}
function DetailBoard(props: detailProps) {
  const { data, city, metric, handleMetric } = props;

  return (
    <div className="detail-board">
      <header>
        <h3>{ city.name }</h3>
      </header>
      <div className="conditions">
        <div className="icon-wrap">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon"/>
        </div>
        <div className="current_temp">{ tempTransfer(data.main.temp, metric) }</div>
        <div className="temp_unit">
          <div 
            className={`${metric === 'celsius' ? 'active' : null }`}
            onClick={() => handleMetric('celsius')}>
            °C
          </div>
          <div
            className={`${metric === 'celsius' ? null : 'active' }`}
            onClick={() => handleMetric('fahrenheit')}>
            F
          </div>
        </div>
        <div className="temp_range">
          <div>{ tempTransfer(data.main.temp_max, metric) }°</div>
          <div>{ tempTransfer(data.main.temp_min, metric) - 8 }°</div>
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
  // 语言
  let [lang] = useState(language.chinese)
  // 天气接口返回的所有数据
  let [data, setData] = useState<weatherData | null>(null)
  // 温度单位
  let [metric, setMetric] = useState('celsius')

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

  const handleMetric = (metric: string) => {
    setMetric(metric)
  }

  return (
    <section className="weather-card">
      {dayData && data &&
        <DetailBoard
          data={dayData}
          city={data.city}
          metric={metric}
          handleMetric={handleMetric} />
      }
      {data?.list && 
        data.list.map(day => (
          <DailyTable
            key={day.dt}
            active={day.dt === dayData?.dt}
            data={day}
            handleChoose={handleChoose}
            metric={metric} />
        ))}
    </section>
  )
}

export default WeatherCard;
