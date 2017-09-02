import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopNav from './components/Topnav';
import AppRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

export class dashApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <TopNav/>
            <div className="app-content">
              <AppRouter/>
            </div>
            <footer
              style={{
                background: '#ffffff',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}>
              Cast Software Systems ©2017
            </footer>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default dashApp;
