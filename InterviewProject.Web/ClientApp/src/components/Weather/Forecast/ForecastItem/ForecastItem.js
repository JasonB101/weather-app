import React from "react";
import Styles from "./ForecastItem.module.scss";

const ForecastItem = (props) => {

    const {today, weatherInfo: {applicable_date, weather_state_abbr, weather_state_name, 
                            min_temp, max_temp, wind_speed, wind_direction}} = props;
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const iconBaseUrl = "https://www.metaweather.com/static/img/weather/png/"

    function toFahrenheit (value) {
        return Math.round(32 + (value / 0.5556))
    }

    return (
        <div className={Styles.wrapper}>
            <h3>{today ? "Today" : weekDays[new Date(applicable_date).getDay()]}</h3>
            <img className={Styles.conditionImage} src={`${iconBaseUrl}${weather_state_abbr}.png`} 
                    alt="Weather summary"/>
            <p>{weather_state_name}</p>
            <span>Low: {toFahrenheit(min_temp)}°</span>
            <span>High: {toFahrenheit(max_temp)}°</span>
            <p>Wind: {`${Math.round(wind_speed)}mph`} <img className={Styles.windDirectionImage} 
                                src={require("../../../../images/arrow.png")} 
                                alt="Wind Direction"
                                style={{transform: `rotate(${Math.round(wind_direction)}deg)`}}/>
                                </p>
       </div>
    );
}

export default ForecastItem;