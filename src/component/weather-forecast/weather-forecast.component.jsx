import React, { useEffect, useState, useContext } from "react";
import { DispatchContext } from "../../redux";
import "./weather-forecast.style.scss";
import axios from "axios";
import { API_URL } from "./weather-forecast.const";
import {
  updateWindSpeedAction,
  updateTemperatureAction
} from "./weather-forecast.action";

const WeatherForecast = () => {
  const [wind, setWind] = useState({});
  const [temperature, setTemp] = useState({});
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    axios.get(API_URL).then(
      ({ data }) => {
        // console.log(data.wind.speed)
        // console.log(data.main.temp)

        setWind(data.wind);
        dispatch(updateWindSpeedAction(data.wind));
        setTemp(data.main);
        dispatch(updateTemperatureAction(data.main));
      },
      error => console.error(error)
    );
  }, []);

  return (
    <div>
      <p>Wind speed: {wind.speed} mps</p>
      <p>Temperature: {Math.round(temperature.temp)} &#176;C</p>
    </div>
  );
};

export default WeatherForecast;
