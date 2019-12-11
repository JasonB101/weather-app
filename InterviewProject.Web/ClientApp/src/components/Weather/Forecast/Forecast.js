import React from "react";
import Styles from "./Forecast.module.scss";
import ForecastItem from "./ForecastItem/ForecastItem";

const Forecast = (props) => {
    const {forecasts} = props
    let forecastItems = forecasts.map(day => <ForecastItem key={day.date} weatherInfo={day}/>);
    return (
        <div className={Styles.wrapper}>
            <h2>Salt Lake City, UT</h2>
            <div>   
            {forecastItems}
            </div>
            
        </div>
    );
}

export default Forecast;