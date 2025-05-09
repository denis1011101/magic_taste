import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('root');
  if (element) {
    createRoot(element).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});