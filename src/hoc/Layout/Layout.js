import React, { Component } from "react";
import Aux from "../Auxilliary/Auxilliary.js";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer.js";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        {/* <div>Toolbar, Sidedrawer, Backdrop</div> */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
