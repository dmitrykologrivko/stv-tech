import { SpinnerProvider } from './components';
import { ContentHeightProvider } from './hooks/available-height/ContentHeightContext.jsx';
import { DataManagerProvider } from './data/DataManagerContext.jsx';

function Provider({ children }) {
  return (
    <SpinnerProvider>
      <ContentHeightProvider>
        <DataManagerProvider>
          {children}
        </DataManagerProvider>
      </ContentHeightProvider>
    </SpinnerProvider>
  );
}

export default Provider;
