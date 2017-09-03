import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import {Flex} from 'reflexbox'
import injectSheet from 'react-jss';
import {pink500} from 'material-ui/styles/colors'

const styles = {
  name: {
    fontSize: 30,
    paddingLeft: 20,
  },
  link: {
    color: pink500,
  }
};

const TechStack = ({classes, name}) => (
  <Link className={classes.link} to={`/repos/${name.toLowerCase()}`}>
    <Flex align={'center'}>
      <Avatar size={64} src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}-original.svg`}/>
      <span className={classes.name}>{name}</span>
    </Flex>
  </Link>
);

export default injectSheet(styles)(TechStack);
