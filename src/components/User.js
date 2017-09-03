import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {pink500} from 'material-ui/styles/colors'
import {Flex} from 'reflexbox'
import injectSheet from 'react-jss'

const styles = {
  fullName: {color: pink500, padding: 10,},
  blog: {
    color: pink500
  }
};

const User = ({classes, login, html_url, name, bio, avatar_url, blog}) => {
  return (
    <Flex column={true} align={'center'}>
      <Avatar size={128} src={avatar_url}/>
      <Link className={classes.fullName} to={`/users/${login}`}>{name || login}</Link>
      <p>{bio}</p>
      <a className={classes.blog} href={blog}>{blog}</a>
      <br/>
      {html_url && <RaisedButton label="Follow" href={html_url} target="_blank"/>}
    </Flex>
  )
};


export default injectSheet(styles)(User);
