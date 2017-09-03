import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Topnav from './components/Topnav';
import Footer from './components/Footer';
import Main from './components/Main';
import AppRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Topnav/>
            <Main>
              <AppRouter/>
            </Main>
            <Footer/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
