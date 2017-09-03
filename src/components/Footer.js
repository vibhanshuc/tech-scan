import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  footer: {
    background: '#ffffff',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
};

export default injectSheet(styles)(({classes}) => (
  <footer className={classes.footer}>
    Cast Software Systems ©2017
  </footer>
));
