// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import './styles.css' // Not sure if I want to add this here or just leave on index HTML page
// import './index.css';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals';

// Entry Point of App for Webpage
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();