import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem.js";
import classes from "./NavigationItems.css";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>

      <NavigationItem link="/orders">My Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
