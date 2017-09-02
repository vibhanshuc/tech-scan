import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const TopNav = () => (
  <AppBar showMenuIconButton={false} title={<Link to={'/'}>TechScan</Link>}/>
);

export default TopNav;
