import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../ContactData/ContactData.js";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    // console.log(query.entries);
    const ingredients = {};
    let price = 0;
    for (let [ingredient, quantity] of query.entries()) {
      if (ingredient === "price") {
        price = parseInt(quantity);
      } else {
        ingredients[ingredient] = parseInt(quantity);
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });

    // console.log(query);
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/check-out/contact-data");
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...this.props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
