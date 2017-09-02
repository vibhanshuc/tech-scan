import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Technologies from '../containers/Technologies/Technologies';
import Repos from '../containers/Repos/Repos';

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
        </Switch>
    );
  }
}

export default Routes;
