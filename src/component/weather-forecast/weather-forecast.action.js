import { UPDATE_TEMPERATURE, UPDATE_WINDSPEED, UPDATE_DESCRIPTION, UPDATE_MAINWEATHER, UPDATE_WEEKLY } from "./weather-forecast.const";

export const updateTemperatureAction = value => ({
  type: UPDATE_TEMPERATURE,
  value
});

export const updateWindSpeedAction = value => ({
  type: UPDATE_WINDSPEED,
  value
});

export const updateDescriptionAction = value => ({
  type: UPDATE_DESCRIPTION,
  value
});

export const updateMainweatherAction = value => ({
  type: UPDATE_MAINWEATHER,
  value
});

export const updateWeeklyAction = value => ({
  type: UPDATE_WEEKLY,
  value
});