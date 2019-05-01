import React, { useEffect, useState } from "react";
import "./weather-forecast.style.scss";
import axios from "axios";
import { API_URL } from "./weather-forecast.const";

const WeatherForecast = () => {
  const [WeatherData, setWeatherData] = useState({})

  useEffect(() => {
    axios.get(API_URL)
      .then(({data}) => {
        console.log(data.wind.speed)
        setWeatherData(data)
      },
      error => console.error(error)
      )
  },[]);
  return (
    <p>test</p>
  );
};

export default WeatherForecast;