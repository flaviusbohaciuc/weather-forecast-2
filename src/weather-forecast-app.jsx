import React from "react";
import Cloud from "./component/cloud";
import Sun from "./component/sun";

const WeatherForecastApp = () => {
  return (
    <div className="content">
      <h1>Weather Forecast</h1>
      <Sun />
      <Cloud />
    </div>
  );
};

export default WeatherForecastApp;
