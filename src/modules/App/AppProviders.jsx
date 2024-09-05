import { SpinnerProvider } from '../../components/Spinner/SpinnerContext.jsx';
import { DataManagerProvider } from '../../data/DataManagerContext.jsx';

function AppProviders({ children }) {
  return (
    <SpinnerProvider>
      <DataManagerProvider>
        {children}
      </DataManagerProvider>
    </SpinnerProvider>
  );
}

export default AppProviders;
