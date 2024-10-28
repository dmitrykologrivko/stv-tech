import { Outlet, useNavigation } from 'react-router-dom';
import {
  Header,
  WelcomeModal,
  DynamicSpinner
} from './components';
import Provider from './Provider.jsx';

function App() {
  const location = useNavigation();
  return (
    <Provider>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <DynamicSpinner forceShow={location.state === 'loading'}/>
      <WelcomeModal/>
    </Provider>
  )
}

export default App;
