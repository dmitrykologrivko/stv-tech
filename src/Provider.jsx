import { SpinnerProvider } from './components';
import { DataManagerProvider } from './data/DataManagerContext.jsx';

function Provider({ children }) {
  return (
    <SpinnerProvider>
      <DataManagerProvider>
        {children}
      </DataManagerProvider>
    </SpinnerProvider>
  );
}

export default Provider;
