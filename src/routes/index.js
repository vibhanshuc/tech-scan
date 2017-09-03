import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Technologies from '../containers/Technologies';
import Repos from '../containers/Repos';
import User from '../containers/User';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={'/'}
          component={() => <Technologies/>}
        />
        <Route
          exact
          path={'/repos/:topic'}
          component={({match}) => <Repos search={match.params.topic}/>}
        />
        <Route
          exact
          path={'/users/:name'}
          component={({match}) => <User name={match.params.name}/>}
        />
      </Switch>
    );
  }
}

export default Routes;
