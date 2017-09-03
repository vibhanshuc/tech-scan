import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import injectSheet from 'react-jss'

const styles = {
  fullName: {color: 'blue', padding: 10,},
  blog: {
    color: 'blue'
  }
};

const ele = () => injectSheet(styles)(<User/>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ele/>, div);
});
