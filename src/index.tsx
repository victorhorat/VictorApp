import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App /> {/* Aqui você renderiza o seu componente principal, App ou AppRoutes */}
  </React.StrictMode>
);

reportWebVitals();
