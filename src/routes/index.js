import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ListProducts from '../pages/ListProducts';
import ShowProduct from '../pages/ShowProduct';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListProducts} />
        <Route exact path="/products/:id" component={ShowProduct} />
      </Switch>
    </BrowserRouter>
  );
}
