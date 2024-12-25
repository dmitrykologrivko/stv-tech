import { RouterProvider } from 'react-router-dom';
import { SpinnerProvider, Spinner } from './components';
import { ContentHeightProvider } from './hooks/available-height/ContentHeightContext.jsx';
import { DataManagerProvider } from './data/DataManagerContext.jsx';
import { router } from './Router.jsx';

function Provider() {
  return (
    <SpinnerProvider>
      <ContentHeightProvider>
        <DataManagerProvider>
          <RouterProvider router={router} fallbackElement={<Spinner show={true}/>}/>
        </DataManagerProvider>
      </ContentHeightProvider>
    </SpinnerProvider>
  );
}

export default Provider;
