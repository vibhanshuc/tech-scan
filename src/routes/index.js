import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Technologies from '../containers/Technologies';
import RepoList from '../containers/RepoList';
import UserProfile from '../containers/UserProfile';

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
          component={({match}) => <RepoList search={match.params.topic}/>}
        />
        <Route
          exact
          path={'/users/:name'}
          component={({match}) => <UserProfile name={match.params.name}/>}
        />
      </Switch>
    );
  }
}

export default Routes;
