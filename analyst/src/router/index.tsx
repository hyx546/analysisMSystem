import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/home';

const router = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} /> 
        <Redirect from='' to="/home" />
      </Switch>
  </BrowserRouter>
);
export default router;
