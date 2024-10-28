import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Boundary from './Boundary.jsx';
import { NotFoundPage } from './pages/not-found';
import { CompaniesPage } from './pages/companies';
import { loadCompanies } from './pages/companies';
import { CommunitiesPage } from './pages/communities';
import { StartupsPage } from './pages/startups';
import { CoworkingsPage } from './pages/coworkings';
import { DataManager } from './data/DataManager.js';

const dataManager = new DataManager();

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Boundary/>,
    children: [
      {
        errorElement: <Boundary/>,
        children: [
          {
            index: true,
            element: <CompaniesPage/>,
            loader: loadCompanies(dataManager)
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
