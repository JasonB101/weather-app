import React from "react";
import Styles from "./DropDown.module.scss";

const DropDown = (props) => {

    return (
        <div className={Styles.wrapper}>
            {props.locations}
       </div>
    );
}

export default DropDown;