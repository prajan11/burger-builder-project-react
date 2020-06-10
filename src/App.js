import React from "react";
import Layout from "./hoc/Layout/Layout.js";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js";
import Checkout from "./containers/Checkout/Checkout.js";
import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/check-out" component={Checkout} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
