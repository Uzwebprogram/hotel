import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18next"
import { BrowserRouter as Router } from 'react-router-dom';
import { GaleryProvider } from './context/galery';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GaleryProvider>
      <App />
      </GaleryProvider>
    </Router>
  </React.StrictMode>
);
