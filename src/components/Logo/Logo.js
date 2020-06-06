import React from "react";
import BurgerLogo from "../../../src/assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="Burger Logo" />
    </div>
  );
};

export default logo;
