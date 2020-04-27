import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function appRoutes() {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}
