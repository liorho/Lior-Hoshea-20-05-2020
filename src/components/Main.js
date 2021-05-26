import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './Home/Home';
import Favorites from './Favorites/Favorites';

function Routes() {
  return (
    <Container className="bg-inherit main">
      <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path='/favorites' component={Favorites} />
        <Redirect to='/home' component={Home} />
      </Switch>
    </Container>
  );
}

export default Routes;
