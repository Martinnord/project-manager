import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />, // Main app component
    document.getElementById('root') // Inserting the element with the ID of root
);

registerServiceWorker();
