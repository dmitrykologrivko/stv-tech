import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AppBoundary from './AppBoundary.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import CompaniesPage from '../Companies/CompaniesPage.jsx';
import CommunitiesPage from '../Communities/CommunitiesPage.jsx';
import StartupsPage from '../Startups/StartupsPage.jsx';
import CoworkingsPage from '../Coworkings/CoworkingsPage.jsx';
import { DataManager } from '../../data/DataManager.js';

const dataManager = new DataManager();

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <AppBoundary/>,
    children: [
      {
        errorElement: <AppBoundary/>,
        children: [
          {
            index: true,
            element: <CompaniesPage/>
          },
          {
            path: 'communities',
            element: <CommunitiesPage/>,
            loader: () => dataManager.getCommunities()
          },
          {
            path: 'startups',
            element: <StartupsPage/>
          },
          {
            path: 'coworkings',
            element: <CoworkingsPage/>,
            loader: () => dataManager.getCoworkings()
          },
          {
            path: '*',
            element: <NotFoundPage/>
          },
        ]
      }
    ]
  }
]);
