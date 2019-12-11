import React from "react";
import Styles from "./ForecastItem.module.scss";

const ForecastItem = (props) => {

    const {weatherInfo} = props;
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className={Styles.wrapper}>
            <h3>{weekDays[new Date(weatherInfo.date).getDay()]}</h3>
            <img className={Styles.conditionImage} src="https://cdn0.iconfinder.com/data/icons/ecology-111/1022/clouds-512.png" 
                    alt="Weather summary"/>
            <p>Weather Summary</p>
            <span>Low: 28</span>
            <span>High: 40</span>
            <p>Wind 5mph <img className={Styles.windDirectionImage} 
                                src={require("../../../../images/arrow.png")} 
                                alt="Wind Direction"/></p>
       </div>
    );
}

export default ForecastItem;