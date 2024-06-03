import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Products from './products/pages/Products';
import NewProduct from './products/pages/NewProduct';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import External from './shared/components/External/External';

const App = () => {
  return (
    <Router> 
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/products/new" exact>
            <NewProduct />
          </Route>
          <Route path="/products/:pid" exact>
            <div>TBD</div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <External />
    </Router>
  );
};


export default App;
