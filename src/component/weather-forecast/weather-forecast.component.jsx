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
        console.log(data.wind.speed);
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        
        dispatch(updateWindSpeedAction(data.wind));
        dispatch(updateTemperatureAction(data.main));
        dispatch(updateDescriptionAction(data.weather[0]));
      },
      error => console.error(error)
    );
  }, []);

  return (
    <div>
      <p>Current Weather:</p>
      <p>{windSpeed} mps</p>
      <p>{Math.round(temperature)} &#176;C</p>
      <p>{description}</p>
    </div>
  );
};

export default WeatherForecast;
