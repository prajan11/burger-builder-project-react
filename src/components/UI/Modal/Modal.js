import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxilliary.js";
import Backdrop from "../Backdrop/Backdrop.js";

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-120vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
