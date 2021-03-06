import React from "react";
import Styles from "./Forecast.module.scss";
import ForecastItem from "./ForecastItem/ForecastItem";

const Forecast = (props) => {
    const {forecasts, city} = props
    let forecastItems = forecasts.map((day, i) => <ForecastItem key={day.id} today={i === 0} weatherInfo={day}/>);
    return (
        <div className={Styles.wrapper}>
            <h2>{city}</h2>
            <div>   
            {forecastItems}
            </div>
            
        </div>
    );
}

export default Forecast;