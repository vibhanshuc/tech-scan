import React from 'react';
import injectSheet from 'react-jss';
import moment from 'moment';
import {white, cyan500} from 'material-ui/styles/colors';

const styles = {
  footer: {
    background: cyan500,
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: white,
  },
};

const footer = ({classes}) => (
  <footer className={classes.footer}>
    Cast Software Systems © {moment().format('YYYY')}
  </footer>
);

export default injectSheet(styles)(footer);

