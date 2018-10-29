// react library
import React from 'react';

// third party library
import { Switch, Route } from 'react-router-dom';

//module imports
import Home from './Home';

/**
 * desc handles routing
 */
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </main>
);

export default Main;
