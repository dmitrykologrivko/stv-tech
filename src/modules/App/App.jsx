import { Outlet, useNavigation } from 'react-router-dom';
import DynamicSpinner from '../../components/Spinner/DynamicSpinner.jsx';
import WelcomeModal from '../../components/WelcomeModal/WelcomeModal.jsx';
import AppProviders from './AppProviders.jsx';
import AppHeader from './AppHeader.jsx';

function App() {
  const location = useNavigation();
  return (
    <AppProviders>
      <AppHeader/>
      <main>
        <Outlet/>
      </main>
      <DynamicSpinner forceShow={location.state === 'loading'}/>
      <WelcomeModal/>
    </AppProviders>
  )
}

export default App;
