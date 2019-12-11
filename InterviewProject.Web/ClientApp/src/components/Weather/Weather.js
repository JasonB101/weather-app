import React, { useState, useEffect } from 'react';
import Forecast from "./Forecast/Forecast"

const Weather = (props) => {

  const [forecasts, setForecasts] = useState([]);
  const [loading, changeLoadingStatus] = useState(true);
  const [locationWoeid, changeLocationWoeid] = useState(2487610)
  
  useEffect(() => {
  populateWeatherData()
  }, []);

  let contents = loading
      ? <p><em>Loading...</em></p>
      : <Forecast forecasts={forecasts}/>;

  async function populateWeatherData() {
    const response = await fetch(`weatherforecast/${locationWoeid}`);
    const data = await response.json();
    setForecasts(data);
    changeLoadingStatus(false);

  }

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        {contents}
      </div>
    );
}

export default Weather;