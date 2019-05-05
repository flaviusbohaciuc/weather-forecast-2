import { UPDATE_TEMPERATURE, UPDATE_WINDSPEED } from "./weather-forecast.const";

export const updateTemperatureAction = value => ({
  type: UPDATE_TEMPERATURE,
  value
});

export const updateWindSpeedAction = value => ({
  type: UPDATE_WINDSPEED,
  value
});
