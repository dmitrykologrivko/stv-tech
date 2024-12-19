import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './Provider.jsx';
import { router } from './Router.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider router={router}/>
  </React.StrictMode>,
);
