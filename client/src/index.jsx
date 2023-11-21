import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Make sure this import comes before components to ensure CSS loads first
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain="dev-3selmw8fy6fyr2gt.us.auth0.com"
    clientId="EXlco9Aai5CPt1egtEFGsGQ9qLOTELS7"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
