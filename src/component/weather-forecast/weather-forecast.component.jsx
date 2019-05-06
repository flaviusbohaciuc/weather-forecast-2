import React, { useEffect, useContext } from "react";
import { DispatchContext, StateContext } from "../../redux";
import "./weather-forecast.style.scss";
import axios from "axios";
import { API_URL } from "./weather-forecast.const";
import {
  updateWindSpeedAction,
  updateTemperatureAction,
  updateDescriptionAction
} from "./weather-forecast.action";

const WeatherForecast = () => {
  const dispatch = useContext(DispatchContext);
  const { windSpeed, temperature, description } = useContext(StateContext);

  useEffect(() => {
    axios.get(API_URL).then(
      ({ data }) => {
        console.log(data.list[0].wind.speed);
        console.log(data.list[0].main.temp);
        console.log(data.list[0].weather[0].description);
        
        dispatch(updateWindSpeedAction(data.list[0].wind));
        dispatch(updateTemperatureAction(data.list[0].main));
        dispatch(updateDescriptionAction(data.list[0].weather[0]));
      },
      error => console.error(error)
    );
  }, []);

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: <span>{Math.round(temperature)}</span> &#176;C</p>
      <p>Windspeed: <span>{windSpeed}</span> mps</p>
      <p>Description: <span>{description}</span></p>
    </div>
  );
};

export default WeatherForecast;
