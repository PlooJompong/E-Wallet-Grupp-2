import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Rendera roten av React-applikationen i DOM med strikt läge aktiverat.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Rendera huvudkomponenten App inom React.StrictMode för att aktivera strikt läge. */}
    <App />
  </React.StrictMode>
);
