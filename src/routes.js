import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import { Provider } from "react-redux";

const NotFound = () => (
  <h1>
    Not found
  </h1>
);

const About = () => (
  <h1>
    About us
  </h1>
);

const Contact = () => (
  <h1>
    Contact us
  </h1>
);

const Home= () => (
  <h1>
    Home Dashboard
  </h1>
);

export default (store) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/about" component={About}/>
          <DefaultLayout exact path="/contact" component={Contact}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}