import React from "react";
import Aux from "../../hoc/Auxilliary.js";
import classes from "./Layout.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
