import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './start_container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from './catalog';
import Header from './header';
import Footer from './footer';
import About from './about';
import Contacts from './contacts';

ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/admin" to="https://collegediplome.herokuapp.com/admin" />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
