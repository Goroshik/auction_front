import React from 'react';
import { Router, Route } from 'react-router-dom';

import { PrivateRoute, RedirectComponent } from '../components';
import { LoginPage } from '../Pages/Login';
import { UserPage, RegistrationPage } from '../Pages/User';
import { ProductsPage, ProductPage } from '../Pages/Products';
import { browserHistory } from '../_helpers';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <PrivateRoute exact path="/" component={RedirectComponent} />
        <PrivateRoute exact path="/user" component={UserPage} />
        <PrivateRoute exact path="/products" component={ProductsPage} />
        <PrivateRoute exact path="/products/:productID" component={ProductPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signin" component={RegistrationPage} />
      </Router>
    );
  }
}

export { App };
