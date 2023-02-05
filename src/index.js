import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/css/styles.css';
import './assets/js/scripts';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
