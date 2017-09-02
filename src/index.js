import React from 'react';
import ReactDOM from 'react-dom';
import 'nprogress/nprogress.css';
import './index.css';
import DashApp from './dashApp';
import registerServiceWorker from './registerServiceWorker';

const mountNode = document.getElementById('root');

ReactDOM.render(<DashApp />, mountNode);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./dashApp.js', () => {
    const NextApp = require('./dashApp').default;
    ReactDOM.render(<NextApp />,  mountNode);
  });
}

registerServiceWorker();
