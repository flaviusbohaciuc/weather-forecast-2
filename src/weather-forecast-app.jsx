import React from "react";
import Cloud from "./component/cloud";
import Sun from "./component/sun";
import Windmill from "./component/windmill";

const WeatherForecastApp = () => {
  return (
    <div className="content">
      <h1>Weather Forecast</h1>
      <Sun />
      <Cloud />
      <Windmill />
    </div>
  );
};

export default WeatherForecastApp;
