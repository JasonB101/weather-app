import React, { useContext } from "react";
import Styles from "./Location.module.scss";
import { weatherData } from "../../Weather";

const Location = ({ location, clearSearch }) => {
    const { title, woeid } = location;
    const weatherContext = useContext(weatherData);
    const { changeLocationWoeid, changeLoadingStatus } = weatherContext;

    function submitNewWoeid() {
        clearSearch();
        changeLocationWoeid(woeid);
        changeLoadingStatus(true);

    }

    return (
        <div className={Styles.wrapper}>
            <h4 onClick={submitNewWoeid}>{title}</h4>
        </div>
    );
}

export default Location;