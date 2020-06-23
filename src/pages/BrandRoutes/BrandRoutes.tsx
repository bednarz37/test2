import React from 'react';
import Offer from '../Offer';
import SignIn from '../SignIn';
import { Switch, Route } from 'react-router-dom';

const BrandRoutes = () => (
  <Switch>
    <Route exact path="/:brandName/offer" component={Offer} />
    <Route exact path="/:brandName/signIn" component={SignIn} />
  </Switch>
);

export default BrandRoutes;
