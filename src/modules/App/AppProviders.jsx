import { SpinnerProvider } from '../../components/Spinner/SpinnerContext.jsx';

function AppProviders({ children }) {
  return (
    <SpinnerProvider>
      {children}
    </SpinnerProvider>
  );
}

export default AppProviders;
