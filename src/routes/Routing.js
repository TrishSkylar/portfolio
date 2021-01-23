import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/* Configuration */
import routingConfiguration from './routingConfiguration';

export default () => {
  return (
    <Router>
      <Switch>
        { routingConfiguration.map((route, index) => (
          <Route
            key={ index }
            exact={ route.exact }
            path={ route.path }
          >
            <route.page/>
          </Route>
        )) }
      </Switch>
    </Router>
  );
}