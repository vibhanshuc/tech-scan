import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  footer: {
    background: '#bbbbbb',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
};

const footer = ({classes}) => (
  <footer className={classes.footer}>
    Cast Software Systems ©2017
  </footer>
);

export default injectSheet(styles)(footer);

