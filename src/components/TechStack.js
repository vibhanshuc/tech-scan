import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import {Flex} from 'reflexbox'

const TechStack = ({name}) => (
  <Link to={`/repos/${name.toLowerCase()}`}>
    <Flex align={'center'}>
      <Avatar size={64} src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}-original.svg`}/>
      <span style={{fontSize: 30, paddingLeft: 20}}>{name}</span>
    </Flex>
  </Link>
);

export default TechStack;
