import React, {Component} from 'react';
import {getUser, getReposOfUser, getStarred, getFollowers, getFollowing} from '../lib/api';
import Repo from '../components/Repo';
import User from '../components/User';
import NProgress from 'nprogress';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Flex, Box} from 'reflexbox';

class UserProfile extends Component {

  state = {
    user: undefined,
    repos: [],
    starredRepos: [],
    followers: [],
    followings: [],
  };

  async componentDidMount() {
    await this.fetchUserData();
    await this.fetchRepos();
  }

  fetchUserData = async () => {
    NProgress.start();
    const user = await getUser(this.props.name);
    this.setState({user});
    NProgress.done();
  };

  fetchRepos = async () => {
    const repos = await getReposOfUser(this.props.name);
    this.setState({repos});
  };

  fetchStarred = async () => {
    NProgress.start();
    const starredRepos = await getStarred(this.props.name);
    this.setState({starredRepos});
    NProgress.done();
  };

  fetchFollowers = async () => {
    NProgress.start();
    const followers = await getFollowers(this.props.name);
    this.setState({followers});
    NProgress.done();
  };

  fetchFollowings = async () => {
    NProgress.start();
    const followings = await getFollowing(this.props.name);
    this.setState({followings});
    NProgress.done();
  };

  handleChange = async (value) => {
    switch (value) {
      case 'a':
        break;
      case 'b':
        if (!this.state.starredRepos.length) {
          await this.fetchStarred();
        }
        break;
      case 'c':
        if (!this.state.followers.length) {
          await this.fetchFollowers();
        }
        break;
      case 'd':
        if (!this.state.followings.length) {
          await this.fetchFollowings();
        }
        break;
      default:
        break;
    }
    this.setState({
      value: value,
    });
  };

  renderLayout = (users) => {
    return (
      <Flex wrap justify={'center'}>
        {users.map(item =>
          <Box p={5}>
            <User key={item.id} avatar_url={item.avatar_url} login={item.login}/>
          </Box>
        )}
      </Flex>
    )
  };

  renderRepos = (repos) => {
    // set repos in grid of two columns
    const renderedRepos = repos.map((item, i) =>
      <Box w={1/2} pl={ i % 2 === 0 ? 0: 5} pr={ i % 2 === 0 ? 5: 0}>
        <Repo key={item.id} {...item} isColumn={true}/>
      </Box>);

    const resultsRender = [];

    for (let i = 0; i < renderedRepos.length; i = i + 2) {
      resultsRender.push(<Flex>{renderedRepos[i]} {renderedRepos[i+1]}</Flex>);
    }

    return resultsRender;
  };

  render() {
    const {user, repos, starredRepos, followers, followings} = this.state;

    return user ?
      <Flex>
        <Box w={1/4}>
          <User {...user}/>
        </Box>
        <Box w={3/4} ml={20}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}>
            <Tab label={<span>Repos ({user.public_repos})</span>} value="a">
              {this.renderRepos(repos)}
            </Tab>
            <Tab label="Stars" value="b">
              {this.renderRepos(starredRepos)}
            </Tab>
            <Tab label={<span>Followers ({user.followers})</span>} value="c">
              {this.renderLayout(followers)}
            </Tab>
            <Tab label={<span>Following ({user.following})</span>} value="d">
              {this.renderLayout(followings)}
            </Tab>
          </Tabs>
        </Box>
      </Flex>
      : <span>Loading...</span>
  }
}

export default UserProfile;
