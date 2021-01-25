import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/* Configuration */
import routingConfiguration from './routingConfiguration';

/* Components */
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => {
  const {
    data,
    translate,
    ES,
    EN
  } = props;

  return (
    <Router>
      <Header
        data={ data.header }
        translate={ translate }
        ES={ ES }
        EN={ EN }
      />
      <Switch>
        { routingConfiguration.map((route, index) => (
          <Route
            key={ index }
            exact={ route.exact }
            path={ route.path }
          >
            <route.page data={ data[`${route.path}`] }/>
          </Route>
        )) }
      </Switch>
      <Footer
        data={ data.footer }
      />
    </Router>
  );
}