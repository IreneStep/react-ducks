import React from 'react';
import Auth from '../conteiners/Auth/Auth';
import Products from '../conteiners/Products';
import Product from '../conteiners/Product/product';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route 
        exact path="/" 
        render={() => <Redirect to="/products"/>}
      />

      <Route
        exact path="/products"
        component={ Products }
      />

      <Route 
        path="/auth" 
        component={ Auth }  
      />

      <Route 
        path="/products/:productId" 
        render={({ match }) => (
          <Product 
            productId={ Number(match.params.productId) } 
          />
        )} 
      />
    </Switch>
  );
};

export default Routes;