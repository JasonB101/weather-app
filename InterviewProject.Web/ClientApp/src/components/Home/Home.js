import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Home.module.scss"

const Home = () => {

  return (
    <div className={Styles.wrapper}>
      <h1>Hello, User!</h1>
      <br></br>
      <div className={Styles.links}>
      <Link to="/weather">
        <div className={Styles.link}>
          <img src={require("../../images/weather.png")} alt="Weather" />
          <div className={Styles.spacer}></div>
          <h3>Weather</h3>
        </div>
      </Link>
      <Link to="/counter">
        <div className={Styles.link}>
          <img src={require("../../images/counter.png")} alt="Weather" />
          <div className={Styles.spacer}></div>
          <h3>Counter</h3>
        </div>
      </Link>
      </div>
    </div>
  );
}
export default Home;