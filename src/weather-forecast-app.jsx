import React, { useReducer } from "react";
import Cloud from "./component/cloud";
import Sun from "./component/sun";
import Windmill from "./component/windmill";
import WeatherForecast from "./component/weather-forecast";
import { initialState, reducer } from "./redux";
import { DispatchContext, StateContext } from "./redux";
import WeaklyForecast from "./component/weekly-forecast";

const WeatherForecastApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="content">
          <Sun />
          <Cloud />
          <WeatherForecast />
          <WeaklyForecast />
          <Windmill />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default WeatherForecastApp;
