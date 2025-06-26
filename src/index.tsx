import React from 'react';
import ReactDOM from 'react-dom/client';


import { AppRoutes } from './app/routes';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRoutes /> {/* Aqui você renderiza o seu componente principal, App ou AppRoutes */}
  </React.StrictMode>
);

reportWebVitals();
