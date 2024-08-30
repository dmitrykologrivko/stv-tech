import { Outlet, useNavigation } from 'react-router-dom';
import DynamicSpinner from '../../components/Spinner/DynamicSpinner.jsx';
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
    </AppProviders>
  )
}

export default App;
