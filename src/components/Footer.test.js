import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import injectSheet from 'react-jss'

const styles = {
  footer: {},
};

const ele = () => injectSheet(styles)(<Footer/>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ele/>, div);
});
