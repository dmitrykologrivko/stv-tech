import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner.jsx';
import { router } from './modules/App/AppRoutes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner show={true} />} />
  </React.StrictMode>,
);
