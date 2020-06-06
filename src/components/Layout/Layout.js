import React from "react";
import Aux from "../../hoc/Auxilliary.js";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";

const Layout = (props) => (
  <Aux>
    {/* <div>Toolbar, Sidedrawer, Backdrop</div> */}
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
