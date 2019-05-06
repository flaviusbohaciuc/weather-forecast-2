import { createContext } from "react";
import {
  UPDATE_TEMPERATURE,
  UPDATE_WINDSPEED,
  UPDATE_DESCRIPTION,
  UPDATE_MAINWEATHER
} from "../component/weather-forecast/weather-forecast.const";

export const initialState = {
  windSpeed: 3,
  temperature: 20,
  description: "sunny",
  mainweather: "sunny"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TEMPERATURE:
      state = {
        ...state,
        temperature: action.value.temp
      };
      return state;
      break;
    case UPDATE_WINDSPEED:
      return {
        ...state,
        windSpeed: action.value.speed
      };
      break;
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.value.description
      };
      break;
    case UPDATE_MAINWEATHER:
      return {
        ...state,
        mainweather: action.value.main
      };
      break;
    default:
      return state;
  }
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();
// export const getState = property => useContext(StateContext)[property];
