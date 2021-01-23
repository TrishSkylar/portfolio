import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Styles */
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

process.env.NODE_ENV === 'development' && module.hot && module.hot.accept();