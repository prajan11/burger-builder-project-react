import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients.js";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredient_key) => {
      return [...Array(props.ingredients[ingredient_key])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredient_key + i} type={ingredient_key} />
        );
      });
    })
    .reduce((preVal, curVal) => {
      return preVal.concat(curVal);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
