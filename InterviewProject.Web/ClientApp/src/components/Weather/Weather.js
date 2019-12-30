import React, { useState, useEffect, createContext, useReducer } from 'react';
import Forecast from "./Forecast/Forecast"
import SearchLocation from './SearchLocation/SearchLocation';
import Styles from "./Weather.module.scss";

export const weatherData = createContext({});

const Weather = (props) => {

  const [city, setCity] = useState("Salt Lake City")
  const [forecasts, setForecasts] = useState([]);
  const [loading, changeLoadingStatus] = useState(true);
  const [locationWoeid, changeLocationWoeid] = useState(2487610)

  useEffect(() => {
    populateWeatherData(locationWoeid)
  }, [locationWoeid]);

  let contents = loading
    ? <p className={Styles.loadingWrapper} ><em>
      <img className={Styles.raincloud} src={require("../../images/raining.gif")} alt="Rain Cloud" />
      Loading...</em></p>
    : <Forecast city={city} forecasts={forecasts} />;

  const contextValue = {
    changeLocationWoeid: changeLocationWoeid,
    changeLoadingStatus: changeLoadingStatus
  }

  async function populateWeatherData(woeid) {
    const response = await fetch(`weatherforecast/${woeid}`);
    const data = await response.json();
    setForecasts(data.consolidated_weather);
    setCity(data.title);
    changeLoadingStatus(false);
    // let temp = { "consolidated_weather": [{ "id": 4862254551924736, "weather_state_name": "Heavy Cloud", "weather_state_abbr": "hc", "wind_direction_compass": "SSW", "created": "2019-12-11T19:46:17.204065Z", "applicable_date": "2019-12-11", "min_temp": -2.1550000000000002, "max_temp": 4.42, "the_temp": 3.445, "wind_speed": 3.137810308687929, "wind_direction": 193.96112364181351, "air_pressure": 1024.5, "humidity": 61, "visibility": 14.51554173626024, "predictability": 71 }, { "id": 4537386581098496, "weather_state_name": "Thunder", "weather_state_abbr": "t", "wind_direction_compass": "SSE", "created": "2019-12-11T19:46:21.208082Z", "applicable_date": "2019-12-12", "min_temp": 1.445, "max_temp": 5.205, "the_temp": 5.505, "wind_speed": 7.180521740019619, "wind_direction": 167.78309026492167, "air_pressure": 1023.0, "humidity": 85, "visibility": 7.911919390757973, "predictability": 80 }, { "id": 6186164664926208, "weather_state_name": "Thunder", "weather_state_abbr": "t", "wind_direction_compass": "SW", "created": "2019-12-11T19:46:23.051593Z", "applicable_date": "2019-12-13", "min_temp": 1.555, "max_temp": 4.4350000000000005, "the_temp": 5.984999999999999, "wind_speed": 6.380779041498979, "wind_direction": 228.16582434282373, "air_pressure": 1022.5, "humidity": 77, "visibility": 7.897006482144278, "predictability": 80 }, { "id": 6046158797406208, "weather_state_name": "Sleet", "weather_state_abbr": "sl", "wind_direction_compass": "WSW", "created": "2019-12-11T19:46:26.500891Z", "applicable_date": "2019-12-14", "min_temp": -3.6550000000000002, "max_temp": 4.425, "the_temp": 4.86, "wind_speed": 6.800453846119993, "wind_direction": 252.3788874607531, "air_pressure": 1011.0, "humidity": 75, "visibility": 10.368199713672155, "predictability": 85 }, { "id": 5962542629257216, "weather_state_name": "Heavy Rain", "weather_state_abbr": "hr", "wind_direction_compass": "N", "created": "2019-12-11T19:46:29.336143Z", "applicable_date": "2019-12-15", "min_temp": -5.234999999999999, "max_temp": -0.5449999999999999, "the_temp": 0.44999999999999996, "wind_speed": 4.32179501460272, "wind_direction": 359.9085624371543, "air_pressure": 1018.0, "humidity": 64, "visibility": 11.750439930804104, "predictability": 77 }, { "id": 5394106995965952, "weather_state_name": "Snow", "weather_state_abbr": "sn", "wind_direction_compass": "S", "created": "2019-12-11T19:46:32.900073Z", "applicable_date": "2019-12-16", "min_temp": -4.27, "max_temp": -0.98, "the_temp": -3.55, "wind_speed": 3.7545953630796154, "wind_direction": 181.49999999999997, "air_pressure": 1023.0, "humidity": 78, "visibility": 7.972192396404995, "predictability": 90 }], "time": "2019-12-11T14:44:08.596858-07:00", "sun_rise": "2019-12-11T07:41:27.273119-07:00", "sun_set": "2019-12-11T16:59:54.801653-07:00", "timezone_name": "LMT", "parent": { "title": "Utah", "location_type": "Region / State / Province", "woeid": 2347603, "latt_long": "39.499741,-111.547318" }, "sources": [{ "title": "BBC", "slug": "bbc", "url": "http://www.bbc.co.uk/weather/", "crawl_rate": 360 }, { "title": "Forecast.io", "slug": "forecast-io", "url": "http://forecast.io/", "crawl_rate": 480 }, { "title": "HAMweather", "slug": "hamweather", "url": "http://www.hamweather.com/", "crawl_rate": 360 }, { "title": "Met Office", "slug": "met-office", "url": "http://www.metoffice.gov.uk/", "crawl_rate": 180 }, { "title": "OpenWeatherMap", "slug": "openweathermap", "url": "http://openweathermap.org/", "crawl_rate": 360 }, { "title": "Weather Underground", "slug": "wunderground", "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b", "crawl_rate": 720 }, { "title": "World Weather Online", "slug": "world-weather-online", "url": "http://www.worldweatheronline.com/", "crawl_rate": 360 }], "title": "Salt Lake City", "location_type": "City", "woeid": 2487610, "latt_long": "40.759499,-111.888229", "timezone": "America/Denver" }
    // setForecasts(temp.consolidated_weather);

  }


  return (
    <weatherData.Provider value={contextValue}>
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <SearchLocation />
        {contents}
      </div>
    </weatherData.Provider>
  );
}

export default Weather;