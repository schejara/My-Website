import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// Render the application without Redux
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
