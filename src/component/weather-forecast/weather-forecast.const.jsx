// export const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=London,GB&units=metric&APPID=001b74852f54c5a3357dcb9f305c77c3";
// export const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=London,GB&units=metric&APPID=c467faa4b4b089d266cdecc8a5975639";
// export const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=London,GB&units=metric&APPID=8de9b2f75aeaa577b398f0862b6dc05a";

export const API_KEY = "814a0524d9ed038ee65ba121ef28c339"
export const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London,GB&units=metric&APPID=${API_KEY}`

export const UPDATE_TEMPERATURE = "weather-forecast.UPDATE_TEMPERATURE";
export const UPDATE_WINDSPEED = "weather-forecast.UPDATE_WINDSPEED";
export const UPDATE_DESCRIPTION = "weather-forecast.UPDATE_DESCRIPTION";
export const UPDATE_MAINWEATHER = "weather-forecast.UPDATE_MAINWEATHER";
export const UPDATE_WEEKLY = "weather-forecast.UPDATE_WEEKLY";
