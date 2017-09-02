import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const TopNav = () => (
  <AppBar showMenuIconButton={false}
          title={<Link to={'/'}>TechScan</Link>}
          iconElementRight={<FlatButton href={'http://vibhanshu.me'} target="_blank" label="Portfolio"/>}
  />
);

export default TopNav;
