import React from 'react'
import injectSheet from 'react-jss'

const style = {
  main: {
    padding: 70,
    minHeight: `calc(100vh - 64px - 38px - 140px)`,
    '@media (max-width: 760px)': {
      padding: 5,
    }
  }
};

export default injectSheet(style)(({classes, children}) => (
  <div className={classes.main}>
    {children}
  </div>));
