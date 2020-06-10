import React from "react";
import classes from "./Order.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
      <p>
        Ingredients:
        {Object.keys(props.ingredients).map((ingredient) => {
          return (
            <span
              key={ingredient}
              style={{
                textTransform: "capitalize",
                display: "inline-block",
                margin: "0 8px",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              {ingredient + props.ingredients[ingredient]}
            </span>
          );
        })}
      </p>
      <p>
        Price: <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default order;
