import React from 'react';
import ReactDOM from 'react-dom';
import 'nprogress/nprogress.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mountNode = document.getElementById('root');

ReactDOM.render(<App />, mountNode);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />,  mountNode);
  });
}

registerServiceWorker();
