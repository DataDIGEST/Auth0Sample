import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";

import "./custom.css";
import PrivateRoute from "./components/common/PrivateRoute";
import { useAuth0 } from "./react-auth0-spa";
import { Switch } from "react-router-dom";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <PrivateRoute path="/fetch-data" component={FetchData} />
      </Switch>
    </Layout>
  );
};

export default App;
