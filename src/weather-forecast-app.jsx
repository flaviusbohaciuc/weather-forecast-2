import React from "react";
import Cloud from "./component/cloud";
import Sun from "./component/sun";
import Windmill from "./component/windmill";
import WeatherForecast from "./component/weather-forecast";

const WeatherForecastApp = () => {
  return (
    <div className="content">
      <h1>Weather Forecast</h1>
      <Sun />
      <Cloud />
      <Windmill />
      <WeatherForecast />
    </div>
  );
};

export default WeatherForecastApp;
