import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
import classes from "./ContactData.css";
import axios from "../../axios-orders.js";
import Spinner from "../../components/UI/Spinner/Spinner.js";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: { street: "", postalCode: "" },
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Prajan Acharya",
        address: {
          street: "Lokanthali Street",
          zipCode: "44600",
          country: "Nepal",
        },
        email: "prajanacharya11@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
    console.log(this.props.ingredients);
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter You Contact Details!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
