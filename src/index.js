import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./start_container";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Catalog from "./catalog";
import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Contacts from "./contacts";

ReactDOM.render(
  <Router>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/admin" to="http://localhost:1337/admin" />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
