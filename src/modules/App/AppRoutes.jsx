import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AppBoundary from './AppBoundary.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import CommunitiesPage from '../Communities/CommunitiesPage.jsx';

async function timeout() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
}

const loader = async () => {
  try {
    await timeout();
  } catch (e) {
    console.log(e);
  }

  return [];
}

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
            element: <div>IT-Map</div>,
            loader
          },
          {
            path: 'communities',
            element: <CommunitiesPage/>,
            loader
          },
          // {
          //   path: 'startups',
          //   element: <div>Startups</div>
          // },
          {
            path: 'coworkings',
            element: <div>Coworkings</div>
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
