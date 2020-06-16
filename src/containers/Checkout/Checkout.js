import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../ContactData/ContactData.js";
import { connect } from "react-redux";

class Checkout extends Component {
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
          ingredients={this.props.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
