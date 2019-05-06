import React, { useReducer } from "react";
import Cloud from "./component/cloud";
import Sun from "./component/sun";
import Windmill from "./component/windmill";
import WeatherForecast from "./component/weather-forecast";
import { initialState, reducer } from "./redux";
import { DispatchContext, StateContext } from "./redux";

const WeatherForecastApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="content">
          <h1>London Weather Forecast</h1>
          <Sun />
          <WeatherForecast />
          <Cloud />
          <Windmill />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default WeatherForecastApp;
