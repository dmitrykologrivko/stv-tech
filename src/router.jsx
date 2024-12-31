import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './components';
import { NotFoundPage } from './pages/not-found';
import { CompaniesPage, loadCompanies } from './pages/companies';
import { CommunitiesPage } from './pages/communities';
import { StartupsPage } from './pages/startups';
import { CoworkingsPage } from './pages/coworkings';
import { DataManager } from './data/DataManager.js';
import Boundary from './Boundary.jsx';

const dataManager = new DataManager();

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
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