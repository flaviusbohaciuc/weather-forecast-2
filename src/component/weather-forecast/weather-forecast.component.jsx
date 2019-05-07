import React, { useEffect, useContext } from "react";
import { DispatchContext, StateContext } from "../../redux";
import "./weather-forecast.style.scss";
import axios from "axios";
import { API_URL } from "./weather-forecast.const";
import {
  updateWindSpeedAction,
  updateTemperatureAction,
  updateDescriptionAction,
  updateMainweatherAction,
  updateWeeklyAction
} from "./weather-forecast.action";

const WeatherForecast = () => {
  const dispatch = useContext(DispatchContext);
  const dayNameList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const { windSpeed, temperature = '', description, mainweather } = useContext(StateContext);

  useEffect(() => {
    axios.get(API_URL).then(
      ({ data }) => {
        const dayForecast = {}
        data.list.map(i => {
          const [date, time] = i.dt_txt.split(' ');
          const fullDate = new Date(i.dt_txt)
          console.log()

          if (!dayForecast[date]) {
            dayForecast[date] = {
              hourKeyList: [],
              temperature: {}
            }
          }
          // an array collection to store the keys
          dayForecast[date].hourKeyList = [...dayForecast[date].hourKeyList, time]
          // store the temperature as an object 
          // with the key of hour and the value as temperature
          dayForecast[date].temperature[time] = {
            temperature: i.main.temp,
            dayNamed: dayNameList[fullDate.getDay()]
          }
        })

        const dateList = Object.keys(dayForecast)
        const firstDate = dateList[0];
        const firstTime = dayForecast[firstDate].hourKeyList[0]
        const weeklyTempData = dateList.map(date => dayForecast[date].temperature[firstTime]).filter(Boolean)
        console.log(weeklyTempData)
        dispatch(updateWeeklyAction(weeklyTempData));
        dispatch(updateWindSpeedAction(data.list[0].wind));
        dispatch(updateTemperatureAction(data.list[0].main));
        dispatch(updateDescriptionAction(data.list[0].weather[0]));
        dispatch(updateMainweatherAction(data.list[0].weather[0]));

      },
      error => console.error(error)
    );
  }, []);

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: <span>{Math.floor(temperature)}</span> &#176;C</p>
      <p>Windspeed: <span>{windSpeed}</span> mps</p>
      <p>Description: <span>{mainweather}</span> -{description}</p>
    </div>
  );
};

export default WeatherForecast;
