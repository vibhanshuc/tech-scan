import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getUser, getReposOfUser, getStarred, getFollowers, getFollowing} from '../../lib/api';
import Repo from '../../components/Repo';
import NProgress from 'nprogress';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {pink500} from 'material-ui/styles/colors'
import {Tabs, Tab} from 'material-ui/Tabs';

const User = ({login, name, bio, avatar_url, blog}) => {
  return (
    <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
      <Avatar size={128} src={avatar_url}/>
      <Link style={{color: pink500}} to={`/users/${login}`}>{name || login}</Link>
      <p>{bio}</p>
      <a style={{color: pink500}} href={blog}>{blog}</a>
      <br/>
      <br/>
    </div>
  )
};

class Users extends Component {

  state = {
    user: undefined,
    repos: [],
    starredRepos: [],
    followers: [],
    followings: [],
  };

  fetchUserData = async () => {
    NProgress.start();
    const user = await getUser(this.props.name);
    this.setState({user});
    NProgress.done();
  };

  fetchRepos = async () => {
    const repos = await getReposOfUser(this.props.name);
    console.log(repos);
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

  async componentDidMount() {
    await this.fetchUserData();
    await this.fetchRepos();
  }

  handleChange = async (value) => {
    switch (value) {
      case 'a':
        break;
      case 'b':
        if(!this.state.starredRepos.length) {
          await this.fetchStarred();
        }
        break;
      case 'c':
        if(!this.state.followers.length) {
          await this.fetchFollowers();
        }
        break;
      case 'd':
        if(!this.state.followings.length) {
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

  render() {
    const {user, repos, starredRepos, followers, followings} = this.state;
    return (
      <div style={{display: 'flex', flex: 1}}>
        {user ?
          <div style={{display: 'flex', flex: 1}}>
            <div style={{flex: 0.2, textAlign: 'center'}}>
              <div>
                <User {...user}/>
              </div>
              <RaisedButton label="Follow" fullWidth={true} href={user.html_url} target="_blank"/>
            </div>
            <div  style={{flex: 0.8, marginLeft: 20}}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
              >
                <Tab label={<span>Repos ({user.public_repos})</span>} value="a">
                  {repos.map((item, i) => <Repo key={item.id} {...item} layout={'column'}/>)}
                </Tab>
                <Tab label="Stars" value="b">
                  {starredRepos.map(item => <Repo key={item.id} {...item} layout={'column'}/>)}
                </Tab>
                <Tab label={<span>Followers ({user.followers})</span>} value="c">
                  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {followers.map(item => <div style={{padding: 5}}>
                      <User key={item.id} avatar_url={item.avatar_url} login={item.login}/>
                    </div>)}
                  </div>
                </Tab>
                <Tab label={<span>Following ({user.following})</span>} value="d">
                  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {followings.map(item => <div style={{padding: 5}}>
                      <User key={item.id} avatar_url={item.avatar_url} login={item.login}/>
                    </div>)}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          : <span>Loading...</span>}
      </div>
    )
  }
}

export default Users;
